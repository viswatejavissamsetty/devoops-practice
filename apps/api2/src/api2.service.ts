import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Api2Service {
  constructor(private readonly configService: ConfigService) {}

  getHello() {
    return {
      API2_KEY1: this.configService.get('API2_KEY1'),
      API2_KEY2: this.configService.get('API2_KEY2'),
    };
  }
}
