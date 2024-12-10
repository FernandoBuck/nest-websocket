import { NestFactory } from '@nestjs/core';
import RootModule from 'src/v1/application/modules/root.module';
import { Logger as PinoLogger } from 'nestjs-pino';
import AppConfig from 'src/v1/infrastructure/config/app.config';
import { Logger } from '@nestjs/common';

export default class ServerApplication {
    public async run(): Promise<void> {
        const app = await NestFactory.create(RootModule, {
            cors: true,
        });

        if (process.env.NODE_ENV !== 'dev') {
            app.useLogger(app.get(PinoLogger));
        }

        app.listen(AppConfig.PORT, AppConfig.HOST, this.log.bind(this));
    }

    private log(): void {
        Logger.log(
            `Server started on host: http://${AppConfig.HOST}:${AppConfig.PORT};`,
            ServerApplication.name,
        );
    }

    public static new(): ServerApplication {
        return new ServerApplication();
    }
}
