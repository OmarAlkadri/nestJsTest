/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = HydratedDocument<User>;

enum EMaritalStatus {
    Married = 1,
    Single
}

@Schema({ timestamps: true })
export class User extends Document {
    @Prop({ type: String, required: true, unique: true, lowercase: true, trim: true })
    email: string;

    @Prop({ type: String, required: true, trim: true })
    password: string;

    @Prop({ type: String, trim: true })
    registrationNumber: string;

    @Prop({ type: String, enum: ["AB+", "AB-", "A+", "A-", "B+", "B-", "0+", "0-"], trim: true })
    EBloodGroup: string;

    @Prop({ type: String, trim: true })
    title: string;

    @Prop({ type: Date, default: Date.now })
    dateOfBirth: Date;

    @Prop({ type: String, trim: true })
    graduationInformation: string;

    @Prop({ type: String, trim: true })
    educationInformation: string;

    @Prop({ type: String, trim: true })
    phoneNumber: string;

    @Prop({ trim: true })
    EMaritalStatus: EMaritalStatus;

    @Prop({ type: Number, trim: true })
    numberOfChildren: number;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'users' })
    userIDs: User[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'users' })
    userID: User;

    @Prop({ type: Date, default: Date.now })
    lastLogin: Date;

    @Prop({ type: Date, default: Date.now })
    lastNotificationSeen: Date;

    @Prop({ type: [String] })
    ERoles: string[];

    @Prop({ type: String, required: true, enum: ["admin", "manager", "trainer", "trainee", "field", "employee", "supervisor"] })
    EUserType: string;

    @Prop({ type: [String], enum: ["English", "Turkish", "German", "French", "Arabic"], trim: true })
    ELanguages: string[];

    @Prop({ type: Date })
    jobStartDate: Date;

    @Prop({ type: Date })
    jobEndDate: Date;

    @Prop({ type: Boolean, default: true })
    isWorking: boolean;

}

export const usersSchema = SchemaFactory.createForClass(User);
