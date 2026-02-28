import { IsEmail, IsOptional } from 'class-validator';
//because of this class-validator module only we are able to use inbuilt like IsEmail,...
export class UpdateUserDto {
      @IsOptional() //not mandatory we can skip 
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}