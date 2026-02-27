import {Controller,Get, Post, Body} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users') //this means all routes will start with /users
export class UserController {
    constructor(private userService: UserService){}
//Nest automatically injects the UserService here
    @Get() //handles get method
    getUsers(){
        return this.userService.getAllUsers(); //calls service method to get all getAllUsers
    }

    @Post() //handles post/users
    createUser(@Body() body: CreateUserDto){ // gets the req body data only specific to createuserdto
        return this.userService.createUser(body); //returns the created user
    }
}44