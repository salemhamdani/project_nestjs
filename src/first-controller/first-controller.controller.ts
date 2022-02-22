import { Controller, Get, Post } from '@nestjs/common';

@Controller('first')
export class FirstControllerController {
  @Get()
  getFirst(): any {
    return 'Get';
  }
  @Post()
  postFirst(): any {
    return 'Post';
  }
}
