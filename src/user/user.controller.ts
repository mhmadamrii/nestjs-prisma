import { Prisma, User } from '@prisma/client';
import { UserService } from './user.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  findAll() {
    return this.userService.getAll();
  }

  @Get('/user/:id')
  async findById(@Param('id') id: string) {
    try {
      return this.userService.findById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
    }
  }

  @Post('/user')
  create(@Body() userData: Prisma.UserCreateInput): Promise<User> {
    return this.userService.create(userData);
  }

  @Delete('/user/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
