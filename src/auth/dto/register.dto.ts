import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {

  @IsNotEmpty()  //name must not be empty
  name: string;

  @IsEmail()  //email must be a valid format
  email: string;

  @MinLength(6)  //password must be min of 6 characters.
  password: string;

}