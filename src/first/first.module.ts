import { Module } from '@nestjs/common';
import { FirstControllerController } from 'src/first-controller/first-controller.controller';
@Module({
  imports: [],
  controllers: [FirstControllerController],
  providers: [],
})
export class FirstModule {}
