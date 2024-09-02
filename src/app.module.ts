import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { PrismaService } from 'prisma/prisma.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [TodoModule, UserModule, UserModule],
  controllers: [AppController],
  providers: [AppService, TodoService, PrismaService, UserService],
})
export class AppModule {}
