import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthnestController } from './g/authnest/authnest.controller';



@Module({
  imports: [
    TypeOrmModule.forRoot({   // ✅ correct place
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task_manager_db',  
      autoLoadEntities: true,
      synchronize: true, //typeORM automatically created database
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AuthnestController],
  
})
export class AppModule {}

