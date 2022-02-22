import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test') //prefix
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test')
  gettest(): any {
    return 'je teste';
  }
}
