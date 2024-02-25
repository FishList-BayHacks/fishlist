import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database.module";
import { countiesProviders } from "src/repositories/fishes.providers";
import { CountieService } from "src/service/fishes.service";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...fishesProviders,
        FishesService
    ]
})
export class FishesModule {}