import { Module } from "@nestjs/common";
import { CountieController } from "src/controllers/counties.controller";
import { DatabaseModule } from "src/database.module";
import { countiesProviders } from "src/repositories/counties.providers";
import { CountieService } from "src/service/countie.service";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...countiesProviders,
        CountieService
    ],
    controllers: [CountieController]
})
export class CountieModule {}