import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User } from '../users/user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,   //access the usertable DB

    private jwtService: JwtService, //used to create JWT token
  ) {}

  async register(registerDto: RegisterDto) {        //creates a new user register create new user

    const hashedPassword = await bcrypt.hash(registerDto.password, 10); //converts the existing password to encrypted password

    const user = this.userRepository.create({   //creates user object name,email password stored hash pass insteadof original
      ...registerDto,
      password: hashedPassword,
    });

    return this.userRepository.save(user); //saves user in db
  } 

  async login(loginDto: LoginDto) { //verify existing user and give JWT token

    const user = await this.userRepository.findOne({    //find the user based on email
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email'); //throws error
    }

    const isPasswordValid = await bcrypt.compare(   //compoares the entered pass with hashed pass
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');  //throws error
    }

    const payload = { userId: user.id, email: user.email }; //creates token with userid,email

    const token = this.jwtService.sign(payload);

    return {                        //returns token
      access_token: token,
    };
  }

}