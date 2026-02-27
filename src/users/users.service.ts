import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable() //this class can be used by other class
export class UserService{
    private users: any[] = [];//temporary array

    getAllUsers(){ // returns all users
        return this.users;
    }
    createUser(user: CreateUserDto){  //adds CreateUserDto data only
        this.users.push(user);
        return user;
    }
}   