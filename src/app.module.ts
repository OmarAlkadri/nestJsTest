/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
//import { ConfigModule } from '../config/config.module';
//import { ConfigService } from '../config/config.service';
import serverConfig from '../config/server.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from 'config/database.config';
import { MongooseConfigService } from './mongooseConfigService';
import { injectDBModules } from './injectDBModules';
import { AuthModule } from './controller/authentication/auth.module';
import { AuthService } from './controller/authentication/auth.service';
import { AuthController } from './controller/authentication/auth.controller';
import { Redis } from 'ioredis';

@Module({
  imports: [//ConfigModule.register({ folder: './config' }),
    ConfigModule.forRoot({
      envFilePath: './env/development.env',
      //ignoreEnvFile: true,

      load: [serverConfig, databaseConfig],
      cache: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      //  useFactory: async (configService: ConfigService) => ({
      // uri: configService.get<string>('MONGODB_HOST'),
      // port: configService.get<string>('MONGODB_PORT'),
      useClass: MongooseConfigService,
      //  }),
      inject: [ConfigService],
    }),
    injectDBModules,
    AuthModule,
    /* MongooseModule.forRootAsync({
       useFactory: () => ({
         uri: 'mongodb://localhost/nest',
       }),
     }),*/
    // MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  providers: [AppService,
    {
      provide: 'REDIS_CLIENT',
      useFactory: () => {
        return new Redis({
          host: 'localhost',
          port: 6379,
        });
      },
    }
  ],
  exports: ['REDIS_CLIENT'],
  controllers: [AppController],
})
export class AppModule { }
