import { ForbiddenException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/data/database.service';
import { UserBodyModel } from 'src/models/user';
import HttpError from 'http-errors';
import * as bcrypt from 'bcrypt';
import { Tokens } from 'src/auth/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private jwtService: JwtService,
  ) {}

  async singUp({ name, email, password }: UserBodyModel): Promise<Tokens> {
    const password_hash = await this.hashData(password);
    const user = await this.db.user.findFirst({ where: { email } });
    if (user) {
      throw HttpError('This email aready exists!');
    }
    const createdUser = await this.db.user.create({
      data: {
        name,
        email,
        password: password_hash,
      },
    });

    const tokens = await this.getTokens(
      createdUser.id,
      createdUser.email,
      createdUser.name,
    );
    await this.updateRefreshTokenHash(createdUser.id, tokens.refresh_token);
    return tokens;
  }

  async login({ email, password }: UserBodyModel): Promise<Tokens> {
    const user = await this.db.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new ForbiddenException('User not foud check your email!');
    }

    const isMatches = await bcrypt.compare(password, user.password);

    if (!isMatches) {
      throw new ForbiddenException('Passwords are not same!');
    }

    const tokens = await this.getTokens(user.id, user.email, user.name);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async logout(id: number) {
    const user = await this.db.user.findFirst({ where: { id } });

    if (!user) throw new ForbiddenException('User not found check your email!');

    await this.db.user.updateMany({
      where: { id },
      data: { hashedRT: null },
    });

    return 'logout has been successfully';
  }

  async refresh(userId: number, hashedRT: string): Promise<Tokens> {
    const user = await this.db.user.findFirst({
      where: { id: userId },
    });
    if (!user) throw new ForbiddenException('User not found!');

    if (!user.hashedRT)
      throw new ForbiddenException('hashed refresh token not found!');

    const isMatches = await bcrypt.compare(hashedRT, user.hashedRT);

    if (!isMatches) {
      throw new ForbiddenException('Tokens are not same');
    }

    const tokens = await this.getTokens(user.id, user.email, user.name);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);
    return tokens;
  }

  hashData(data: any) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(
    userId: number,
    email: string,
    name: string,
  ): Promise<Tokens> {
    const [access_token, refresh_token] = await Promise.all([
      await this.jwtService.signAsync(
        {
          userId,
          name,
          email,
        },
        {
          secret: process.env.SECRET,
          expiresIn: 60 * 15,
        },
      ),
      await this.jwtService.signAsync(
        {
          userId,
          name,
          email,
        },
        {
          secret: process.env.REFRESH_SECRET,
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);
    return {
      access_token,
      refresh_token,
    };
  }

  async updateRefreshTokenHash(userId: number, refresh_token: string) {
    const hash = await this.hashData(refresh_token);
    await this.db.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRT: hash,
      },
    });
  }
}
