import { Module } from '@nestjs/common';
import FirstWebsocket from '../controllers/websocket/websocket';

@Module({
  providers: [FirstWebsocket],
})
export default class WebsocketModule {}
