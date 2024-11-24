import { get } from 'env-var';

export default class MysqlDatabaseConfig {
    public static readonly HOST: string = get('HOST').required().asString();
    public static readonly PORT: number = get('MYSQL_PORT')
        .required()
        .asPortNumber();
    public static readonly DATABASE: string = get('MYSQL_DATABASE')
        .required()
        .asString();
    public static readonly USER: string = get('MYSQL_USER')
        .required()
        .asString();
    public static readonly PASSWORD: string = get('MYSQL_PASSWORD')
        .required()
        .asString();
}
