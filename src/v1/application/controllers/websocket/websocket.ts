import { OnModuleInit } from '@nestjs/common';
import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export default class FirstWebsocket implements OnModuleInit {
    @WebSocketServer()
    private readonly server: Server;

    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log(socket.id);
            console.log('Connected');
        });
    }

    @SubscribeMessage('events')
    onNewMessage(@MessageBody() body: any) {
        console.log(body);
        this.server.emit('onMessage', {
            msg: 'new message',
            content: body,
        });
    }
}
