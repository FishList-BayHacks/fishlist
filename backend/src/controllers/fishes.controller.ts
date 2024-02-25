import { Controller, Get } from '@nestjs/common';
import { FishService } from '../service/fishes.service';
import { Fish } from '../entities/fishes.entity';

@Controller()
export class FishController {
  constructor(private readonly fishService: FishService) {}

  @Get("/fish")
  async getCounties(): Promise<Fish[]> {
    return await this.fishService.findAll();
  }
}