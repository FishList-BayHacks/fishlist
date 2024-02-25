import { Controller, Get } from '@nestjs/common';
import { CountieService } from '../service/countie.service';
import { Counties } from '../entities/counties.entity';

@Controller()
export class CountieController {
  constructor(private readonly countieService: CountieService) {}

  @Get("/counties")
  async getCounties(): Promise<Counties[]> {
    return await this.countieService.findAll();
  }
}