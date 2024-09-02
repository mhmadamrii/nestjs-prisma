import { TodoService } from './todo.service';
import { Prisma, Todo } from '@prisma/client';

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() data: Prisma.TodoCreateInput) {
    return this.todoService.create(data);
  }

  @Get('/todos')
  findAll() {
    return this.todoService.findAll();
  }

  @Get('todo/:id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Get('todo/completed')
  findCompleted(@Query('completed') completed: string): Promise<Todo[]> {
    const isCompleted = completed === 'true';
    return this.todoService.findCompleted(isCompleted);
  }

  @Patch('todo/:id')
  update(@Param('id') id: string, @Body() data: Prisma.TodoUpdateInput) {
    return this.todoService.update(+id, data);
  }

  @Delete('id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
