import { PartialType } from '@nestjs/swagger';
import { SignInDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(SignInDto) {}
