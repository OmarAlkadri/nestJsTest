/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser, User, UserDocument } from '../../schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly usersModel: Model<UserDocument>) { }
    //constructor(@InjectConnection('users') private connection: Connection) {}
    //constructor(@InjectModel(Cat.name, 'cats') private catModel: Model<Cat>) {}

    async singIn(username: string): Promise<any | null | undefined> {
        return this.usersModel.find(user => user.username === username);

        //   return this.usersModel.findOne({ username }).exec();

    }

    async findOne(): Promise<IUser> {
        return this.usersModel.findOne().exec();

    }


    async findAll(): Promise<IUser[]> {
        return this.usersModel.find().exec();
    }

    async create(createCatDto: any): Promise<IUser> {
        try {
            const createdUser = await this.usersModel.create(createCatDto); // Correct way to create a document
            createdUser.save()
            return createdUser;
        } catch (error) {
            console.log(error)
        }
    }
}