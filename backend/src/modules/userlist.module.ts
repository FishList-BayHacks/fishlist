import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database.module";
import { userlistProviders } from "src/repositories/userlist.providers";
import { UserlistService} from "src/service/userlist.service";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...userlistProviders,
        UserlistService
    ]
})
export class UserlistModule {}