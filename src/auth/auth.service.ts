import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { NotFound } from 'src/erros';
import { UsersService } from 'src/users/users.service';
import { SignInDto, SignUpDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async SingIn(signIn: SignInDto) {
    try {
      if (!signIn.email || !signIn.passwd) {
        console.log('fill in all fields');
      }
      const user = await this.userService.findOne(signIn.email);
      if (!user) {
        console.log('user not found');
      }
      if (user?.passwd !== signIn.passwd) {
        throw new UnauthorizedException();
      }
      const payload = { sub: user.id, email: user.email };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw new NotFound('user is not in database' + error);
    }
  }

  async SignUp(signUpDto: SignUpDto) {
    try {
      return await this.prismaService.user.create({
        data: { ...signUpDto },
      });
    } catch (error) {
      console.error('Can not possible create new user:' + error);
      throw new BadRequestException();
    }
  }
}
