import { Body, Controller, Post } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Post('tokens')
  async saveTokens(
    @Body() body: { telegramToken: string; weatherApiKey: string },
  ) {
    console.log(body.telegramToken, body.weatherApiKey);
    return { message: 'Tokens saved' };
  }
}
