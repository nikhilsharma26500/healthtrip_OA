import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import * as path from 'path';

config({ path: path.resolve(__dirname, '../../.env') }); // Load the variables from the .env file

@Injectable()
export class BotService {
  botMessage() {
    process.env.NTBA_FIX_319 = '1';
    const TelegramBot = require('node-telegram-bot-api');

    const token = process.env.TELEGRAM_TOKEN;

    const bot = new TelegramBot(token, { polling: true });

    bot.on('message', (msg: any) => {
      let Hi = 'hi';
      if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(
          msg.from.id,
          'Hello ' +
            msg.from.first_name +
            ' what would you like to know about me?',
        );
      }
    });
  }
}