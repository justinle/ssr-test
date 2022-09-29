import { Controller, Get, Ip, Req } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Ip() ip: string
  ): string {
    console.log(ip);
    return JSON.stringify(ip);
  }
}
