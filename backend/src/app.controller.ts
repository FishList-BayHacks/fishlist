import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CountieService } from './service/countie.service';
import { Counties } from './entities/counties.entity';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
