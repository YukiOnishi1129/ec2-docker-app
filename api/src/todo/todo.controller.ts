import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
/* services */
import { TodoService } from './todo.service';
/* dto */
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { FindTodoListResponseDto } from './dto/find-todo.dto';
/* entities */
import { Todo } from './entities/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body(ValidationPipe) createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<FindTodoListResponseDto> {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    const todo = await this.todoService.findOne(id);
    return todo;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return await this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Todo> {
    return await this.todoService.remove(id);
  }
}
