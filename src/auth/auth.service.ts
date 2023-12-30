import { BadRequestException, HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto, SignUpDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async SingIn(signIn: SignInDto, res: Response) {
    try {
      if (!signIn.email || !signIn.passwd) {
        console.log('fill in all fields');
      }
      const user = await this.userService.findOne(signIn.email);
      if (!user) {
        console.log('user not found');
      }

      const isMath = await bcrypt.compare(signIn.passwd, user.passwd);

      if (!isMath) {
        console.log('password not math');
      }

      const payload = { sub: user.id, email: user.email };
      const token = await this.jwtService.signAsync(payload);

      return res
        .status(HttpStatus.OK)
        .json({ acessToken: token, message: 'Login sucessful' });
    } catch (error) {
      throw new InternalServerErrorException(
        'Authentication failed',
        error.message,
      );
    }
  }

  async SignUp(signUpDto: SignUpDto) {
    try {
      const { enterprise, email, passwd } = signUpDto;
      if (!enterprise || !email || !passwd) {
        console.log(
          `enterprise: ${enterprise}, email: ${email}, passwd: ${passwd}`,
        );
        console.log('tem campo sem receber valor');
      }
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(passwd, saltOrRounds);
      return await this.prismaService.user.create({
        data: {
          email: email,
          passwd: hash,
          enterprise: enterprise,
        },
      });
    } catch (error) {
      console.error('Can not possible create new user:' + error);
      throw new BadRequestException();
    }
  }
}
