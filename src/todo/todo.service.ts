import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TodoCreateInput) {
    return this.prisma.todo.create({ data });
  }

  async findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(id: number) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.TodoUpdateInput) {
    return this.prisma.todo.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }

  async findCompleted(completed: boolean): Promise<Todo[]> {
    return this.prisma.todo.findMany({
      where: { completed },
    });
  }
}
