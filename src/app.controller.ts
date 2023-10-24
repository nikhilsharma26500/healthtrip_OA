import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { BotService } from './bot/bot.service';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  constructor(private readonly botService: BotService) {}

  @Get()
  getBotDialog(@Res() res: any) {
    this.botService.botMessage();
    res.status(HttpStatus.OK).send('Bot service has started!');
  }
}
