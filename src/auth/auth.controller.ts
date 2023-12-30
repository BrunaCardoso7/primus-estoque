import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto/create-auth.dto';
import { Public } from 'src/decorator/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('signin')
  singin(@Body() singinDto: SignInDto) {
    return this.authService.SingIn(singinDto);
  }

  @Public()
  @Post('signup')
  singUp(@Body() signUpDto: SignUpDto) {
    return this.authService.SignUp(signUpDto);
  }
}
