import { EBloodGroup, EMaritalStatus, ERoles, ELanguages } from '../../schemas/users.schema';

export class CreateUserDto {
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
    ERoles?: ERoles[];
    EUserType: ERoles;
    ELanguages?: ELanguages[];
    jobStartDate?: Date;
    jobEndDate?: Date;
    isWorking?: boolean;
}
