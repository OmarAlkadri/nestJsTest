/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { UsersModule } from './controller/users/users.module';
import { AuthService } from './controller/authentication/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './controller/users/users.service';
import { AuthModule } from './controller/authentication/auth.module';

@Module({
    imports: [
        AuthModule,
        UsersModule
    ],
})
export class injectDBModules { }
