import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserBodyModel } from 'src/models/user';
import { AuthService } from 'src/services/auth.service';
import { Tokens } from 'src/auth/types';
import { AccessTokenGuard, RefreshTokenGuard } from 'src/common/guards';
import { CurrentUser } from '../common/decorators /CurrentUser.decorator';
import { Public } from 'src/common/decorators ';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async singUp(
    @Body() { name, email, password }: UserBodyModel,
  ): Promise<Tokens> {
    return await this.authService.singUp({ name, email, password });
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() { email, password }: UserBodyModel): Promise<Tokens> {
    return await this.authService.login({ email, password });
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@CurrentUser('userId') userId) {
    return await this.authService.logout(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  async refresh(@CurrentUser() { userId, refreshToken }): Promise<Tokens> {
    return await this.authService.refresh(userId, refreshToken);
  }
}