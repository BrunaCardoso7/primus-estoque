import { PartialType } from '@nestjs/mapped-types';
import { CreateProdOutputDto } from './create-prod-output.dto';

export class UpdateProdOutputDto extends PartialType(CreateProdOutputDto) {}
