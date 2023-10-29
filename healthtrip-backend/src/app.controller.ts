import { Controller, Post, Get, Req, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }

  // To be deleted later
  @Post('tokens')
  async saveTokens(
    @Body() body: { telegramToken: string; weatherApiKey: string },
  ) {
    console.log(body.telegramToken, body.weatherApiKey);
    return { message: 'Tokens saved' };
  }
}
