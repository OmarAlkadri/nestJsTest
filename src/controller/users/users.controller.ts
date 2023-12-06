/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Post, Req, Res, HttpCode, Header, HttpStatus, Redirect, Query, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get(':username?')
  async signIn(@Res({ passthrough: true }) res, username: string): Promise<any> {
    try {
      const result = await this.usersService.singIn('2');
      res.status(HttpStatus.CREATED).send(result)
      return result
    } catch (error) {
      console.log(error)
    }
  }

  /*  @Get('find/')
    @Get(':id?')
    async findOne(@Res() res, @Param('id') id: string, @Query('name') name: string): Promise<any> {
      res.status(HttpStatus.OK).send([{}])
      return [{}]
    }*/

  /* @Get(':id?')
   @Get(':name?')
   async findAll(@Res() res, @Param('id') id: string, @Query('name') name: string): Promise<any> {
     res.status(HttpStatus.OK).send([{}])
     return [{}]
   }
 */
  @Post()
  @Header('Cache-Control', 'none')
  // @HttpCode(204)
  @Redirect('https://nestjs.com', 302)
  async create(@Res({ passthrough: true }) res, @Body() data: any, @Query('version') version): Promise<any> {
    try {
      const result = await this.usersService.create(data);
      res.status(HttpStatus.CREATED).send(result)
      return result
    } catch (error) {
      console.log(error)
    }
  }
}