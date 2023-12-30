import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  singin(@Body() singinDto: SignInDto) {
    return this.authService.SingIn(singinDto);
  }
  @Post()
  singUp(@Body() signUpDto: SignUpDto) {
    return this.authService.SignUp(signUpDto);
  }
}
