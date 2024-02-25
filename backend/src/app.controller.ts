import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CountieService } from './service/countie.service';
import { Counties } from './entities/counties.entity';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly countieService: CountieService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/counties")
  async getCounties(): Promise<Counties[]> {
    return await this.countieService.findAll();
  }
}
