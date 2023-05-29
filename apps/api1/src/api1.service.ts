import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Api1Service {
  constructor(private readonly configService: ConfigService) {}

  getHello() {
    return {
      API1_KEY1: this.configService.get('API1_KEY1'),
      API1_KEY2: this.configService.get('API1_KEY2'),
    };
  }
}
