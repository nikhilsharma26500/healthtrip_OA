import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google-strategy/google-strategy.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
