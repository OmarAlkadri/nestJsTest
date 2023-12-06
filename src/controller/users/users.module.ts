/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule/*, getConnectionToken, getModelToken*/ } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, usersSchema } from '../../schemas/users.schema';
import { Redis } from 'ioredis';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: usersSchema }]),
    MongooseModule.forFeatureAsync([{
      name: User.name,
      useFactory: () => {
        const schema = usersSchema;
        // schema.plugin(require('mongoose-autopopulate'));
        return schema;
      },
    }]),

  ],
  controllers: [UsersController],
  providers: [UsersService,
    /*{
      provide: getModelToken(User.name),
      useValue: usersModel,
    },*/],
  exports: [UsersService]

  //Z inject: [getConnectionToken('users')],
})
export class UsersModule { }