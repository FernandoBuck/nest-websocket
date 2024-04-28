// const emailDecorator = applyDecorators(isEmail);

import { isEmail } from '../../../../common/decorator/is-email.decorator';

export default class Email {
  @isEmail()
  private readonly _email: string;

  constructor(value: string) {
    this._email = value;
  }

  public get value(): string {
    return this._email;
  }
}
