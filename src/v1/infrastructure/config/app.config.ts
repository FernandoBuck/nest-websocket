import { get } from 'env-var';

export default class AppConfig {
  public static readonly PORT: number = get('PORT').required().asPortNumber();
  public static readonly HOST: string = get('HOST').required().asString();
}
