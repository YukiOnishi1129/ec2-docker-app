import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(25)
  title: string;

  @IsString()
  @IsNotEmpty()
  comment: string;
}

export class UpdateTodoResponseDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(25)
  title: string;

  @IsString()
  @IsNotEmpty()
  comment: string;

  @IsString()
  @IsNotEmpty()
  createdAt: Date;

  @IsString()
  @IsNotEmpty()
  updatedAt: Date;
}
