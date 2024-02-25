import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database.module";
import { countiesProviders } from "src/repositories/counties.providers";
import { CountieService } from "src/service/countie.service";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...countiesProviders,
        CountieService
    ]
})
export class CountieModule {}