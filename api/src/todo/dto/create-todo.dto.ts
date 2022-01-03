import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(25)
  title: string;

  @IsString()
  @IsNotEmpty()
  comment: string;
}

export class CreateTodoResponseDto {
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
