import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller("/auth")
export class UsersController {

@Post("/signup")
createUser(@Body() body: CreateUserDto) {
  console.log(body);
}

@Get("/:id")
findUser(@Param("id") id: number) {}

@Get()
findAllUsers(@Query() email: string) {}

@Patch("/:id")
updateUser(@Param("id") id: number) {}

@Delete("/:id")
removeUser(@Param("id") id: number) {}

}
