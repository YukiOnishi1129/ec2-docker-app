import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

/**
 * RemoveTodoResponseDto
 */
export class RemoveTodoResponseDto {
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
