import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountieModule } from './modules/countie.module';
import { DivesitesModule } from './modules/divesites.module';
import { UserlistModule } from './modules/userlist.module';

@Module({
  imports: [CountieModule, DivesitesModule, UserlistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
