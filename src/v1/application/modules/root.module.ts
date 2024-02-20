import { Module } from '@nestjs/common';
import { AppModule } from './app.module';
import WebsocketModule from './websocket.module';

@Module({
  imports: [WebsocketModule, AppModule],
})
export default class RootModule {}
