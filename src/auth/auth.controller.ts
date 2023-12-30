import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto/create-auth.dto';
import { Public } from 'src/decorator/public.decorator';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @ApiBody({ type: SignInDto })
  @Post('signin')
  singin(@Body() singinDto: SignInDto, @Res() res: Response) {
    return this.authService.SingIn(singinDto, res);
  }

  @Public()
  @ApiBody({ type: SignUpDto })
  @Post('signup')
  singUp(@Body() signUpDto: SignUpDto) {
    return this.authService.SignUp(signUpDto);
  }
}
