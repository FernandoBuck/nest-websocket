import { DataSource, MigrationInterface, QueryRunner } from 'typeorm';
import MysqlDatabaseConfig from 'src/v1/infrastructure/config/mysql-database.config';

export default class UserMigration implements MigrationInterface {
    constructor(private writeDataSource: DataSource) {
        writeDataSource = new DataSource({
            type: 'mysql',
            host: MysqlDatabaseConfig.HOST,
            port: MysqlDatabaseConfig.PORT,
            username: MysqlDatabaseConfig.USER,
            password: MysqlDatabaseConfig.PASSWORD,
            database: MysqlDatabaseConfig.DATABASE
        });
    }
    
    async up(queryRunner: QueryRunner): Promise<any> {
        
    }

    async down(queryRunner: QueryRunner): Promise<any> {}
}
