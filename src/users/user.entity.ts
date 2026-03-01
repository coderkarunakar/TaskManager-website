    import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //table in database
export class User {

  @PrimaryGeneratedColumn() //automatically generates 1,2,3,...
  id: number;

  @Column() //columnname is name
  name: string;

  @Column() //column name is emain
  email: string;

  @Column()  //password
  password: string;

}