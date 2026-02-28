import {Controller,Get, Post, Body, Param, Patch, Delete} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') //this means all routes will start with /users
export class UserController {
    constructor(private usersService: UserService){}
//Nest automatically injects the UserService here
    @Get() //handles get method
    getUsers(){
        return this.usersService.getAllUsers(); //calls service method to get all getAllUsers
    }

    @Post() //handles post/users
    createUser(@Body() body: CreateUserDto){ // gets the req body data only specific to createuserdto
        return this.usersService.createUser(body); //returns the created user
    }

    @Get(':id')
        getUserById(@Param('id') id: string) {
        return this.usersService.findUserById(Number(id));
    }
    @Patch(':id')
        updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) //this brings id,body
        {
            return this.usersService.updateUser(Number(id), body);//this converts id to Number bcz db id is Number,and calls service method and service will update user in database
        }

    @Delete(':id')
        deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}