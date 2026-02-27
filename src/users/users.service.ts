import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'

@Injectable() //this class can be used by other class
export class UserService{
     constructor(
     @InjectRepository(User)
    private userRepository: Repository<User>, //now using userRepository we can use .find,.save
  ) {}

    getAllUsers(){ // returns all users
        return this.userRepository.find();
    }
    createUser(createUserDto: CreateUserDto){  //adds CreateUserDto data only
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    }
}   