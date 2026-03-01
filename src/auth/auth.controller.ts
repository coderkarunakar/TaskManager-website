import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';


//connects http request with auth service
//base route so all routes starts with auth 
@Controller('auth')
export class AuthController {
//connects controller to auth service so we can use register,login
  constructor(private authService: AuthService) {}

  //takes data from register  body and sends data to authservice.register
  //POST /auth/register → AuthController → AuthService → DB
  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }


  //takes data from body and sends dat to authservice.login
  //POST /auth/login → AuthController → AuthService → JWT Token
  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

}