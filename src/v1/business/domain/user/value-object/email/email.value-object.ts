import { maxLength } from '../../../../common/decorator/max-length.decorator';
import { isEmail } from '../../../../common/decorator/is-email.decorator';

export default class Email {
    @maxLength(256)
    @isEmail()
    private readonly _email: string;

    constructor(value: string) {
        this._email = value;
    }

    public get value(): string {
        return this._email;
    }
}
