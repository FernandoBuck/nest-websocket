import { TUserDTO } from '../dto/user.dto';
import Email from '../value-object/email/email.value-object';
import Username from '../value-object/username/username.value-object';

export default class User {
    private _username: Username;
    private _email: Email;

    constructor(data: TUserDTO) {
        this._username = new Username(data.username);
        this._email = new Email(data.email);
    }

    get username(): string {
        return this._username.value;
    }

    get email(): string {
        return this._email.value;
    }
}
