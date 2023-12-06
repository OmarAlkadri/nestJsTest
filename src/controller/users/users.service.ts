/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../schemas/users.schema';
//import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private usersModel: Model<any>) { }
    //constructor(@InjectConnection('users') private connection: Connection) {}
    //constructor(@InjectModel(Cat.name, 'cats') private catModel: Model<Cat>) {}

    async singIn(username: string): Promise<any| null|undefined> {
        return this.usersModel.find(user => user.username === username);

     //   return this.usersModel.findOne({ username }).exec();

    }

    async findOne(): Promise<typeof User> {
        return this.usersModel.findOne().exec();

    }


    async findAll(): Promise<typeof User[]> {
        return this.usersModel.find().exec();
    }

    async create(createCatDto: any): Promise<typeof User> {
        try {
            const createdCat = new this.usersModel(createCatDto);
            createdCat.save()
            return createdCat;
        } catch (error) {
            console.log(error)
        }
    }
}