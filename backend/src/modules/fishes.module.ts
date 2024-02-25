import { Module } from "@nestjs/common";
import { FishController } from "src/controllers/fishes.controller";
import { DatabaseModule } from "src/database.module";
import { fishProviders } from "src/repositories/fishes.providers";
import { FishService } from "src/service/fishes.service";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...fishProviders,
        FishService
    ],
    controllers: [FishController]
})
export class FishesModule {}