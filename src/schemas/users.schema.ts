/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

export interface IUser extends Document {
    email: string;
    password: string;
    registrationNumber?: string;
    EBloodGroup?: EBloodGroup;
    title?: string;
    dateOfBirth?: Date;
    graduationInformation?: string;
    educationInformation?: string;
    phoneNumber?: string;
    EMaritalStatus?: EMaritalStatus;
    numberOfChildren?: number;
    lastLogin?: Date;
    lastNotificationSeen?: Date;
    ERoles?: ERoles[];
    EUserType: ERoles;
    ELanguages?: ELanguages[];
    jobStartDate?: Date;
    jobEndDate?: Date;
    isWorking?: boolean;
}

export enum EMaritalStatus {
    Married = 1,
    Single,
}

export enum EBloodGroup {
    AB_PLUS = "AB+",
    AB_MINUS = "AB-",
    A_PLUS = "A+",
    A_MINUS = "A-",
    B_PLUS = "B+",
    B_MINUS = "B-",
    O_PLUS = "0+",
    O_MINUS = "0-",
}

export enum ERoles {
    Admin = "admin",
    Manager = "manager",
    Trainer = "trainer",
    Trainee = "trainee",
    Field = "field",
    Employee = "employee",
    Supervisor = "supervisor",
}

export enum ELanguages {
    English = "English",
    Turkish = "Turkish",
    German = "German",
    French = "French",
    Arabic = "Arabic",
}

@Schema({ timestamps: true })
export class User extends Document implements IUser {
    @Prop({ type: String, required: true, unique: true, lowercase: true, trim: true })
    email: string;

    @Prop({ type: String, required: true, trim: true, minlength: 8 })
    password: string;

    @Prop({ type: String, trim: true })
    registrationNumber: string;

    @Prop({ type: String, enum: Object.values(EBloodGroup), trim: true })
    EBloodGroup: EBloodGroup;

    @Prop({ type: String, trim: true })
    title: string;

    @Prop({ type: Date, default: Date.now })
    dateOfBirth: Date;

    @Prop({ type: String, trim: true })
    graduationInformation: string;

    @Prop({ type: String, trim: true })
    educationInformation: string;

    @Prop({ type: String, trim: true, match: /^[0-9\-\+]{9,15}$/ })
    phoneNumber: string;

    @Prop({ type: String, enum: Object.values(EMaritalStatus) })
    EMaritalStatus: EMaritalStatus;

    @Prop({ type: Number })
    numberOfChildren: number;

    @Prop({ type: Date, default: Date.now })
    lastLogin: Date;

    @Prop({ type: Date, default: Date.now })
    lastNotificationSeen: Date;

    @Prop({ type: [String], enum: Object.values(ERoles) })
    ERoles: ERoles[];

    @Prop({ type: String, required: true, enum: Object.values(ERoles) })
    EUserType: ERoles;

    @Prop({ type: [String], enum: Object.values(ELanguages), trim: true })
    ELanguages: ELanguages[];

    @Prop({ type: Date })
    jobStartDate: Date;

    @Prop({ type: Date })
    jobEndDate: Date;

    @Prop({ type: Boolean, default: true })
    isWorking: boolean;
}

export const usersSchema = SchemaFactory.createForClass(User);
