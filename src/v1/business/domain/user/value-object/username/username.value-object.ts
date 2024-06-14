import { isString } from '../../../../common/decorator/is-string.decorator';
import { maxLength } from '../../../../common/decorator/max-length.decorator';
import { minLength } from '../../../../common/decorator/min-length.decorator';

export default class Username {
    @minLength(3)
    @isString()
    @maxLength(255)
    private readonly _username: string;

    constructor(value: string) {
        this._username = value;
    }

    public get value(): string {
        return this._username;
    }
}
