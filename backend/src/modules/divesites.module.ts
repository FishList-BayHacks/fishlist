import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database.module";
import { divesitesProviders } from "src/repositories/divesites.providers";
import { DivesitesService } from "src/service/divesites.service";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...divesitesProviders,
        DivesitesService
    ]
})
export class DivesitesModule {}