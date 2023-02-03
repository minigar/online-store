import { Request } from 'express';
export interface UserRequest extends Request {
  user: {
    userId: number;
    name: string;
    email: string;
    iat: number;
    exp: number;
    refreshToken: string;
  };
}
