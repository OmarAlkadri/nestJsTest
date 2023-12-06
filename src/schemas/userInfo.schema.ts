/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument, Document, Types } from 'mongoose';



export type UserDocument = HydratedDocument<userInfo>;

@Schema()
export class userInfo extends Document {
    @Prop()
    name: number;

    @Prop()
    age: number;

    @Prop()
    breed: string;

    @Prop([String])
    tags: string[];

    @Prop({ type: Types.ObjectId, ref: 'users' })
    userID: Types.ObjectId;
    @Prop({ type: [Types.ObjectId], ref: 'users' })
    usersID: [Types.ObjectId];



}

export const CatSchema = SchemaFactory.createForClass(userInfo);
