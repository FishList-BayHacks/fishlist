import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountieModule } from './modules/countie.module';

@Module({
  imports: [CountieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
