export class User {
    private _id?: number;
    private _user: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;

    constructor(id: number, user: string, firstName: string, lastName: string, email: string);
    constructor(user: string, firstName: string, lastName: string, email: string)
    constructor(...args: any[]) {
        if (args.length === 5) {
            this._id = args[0];
            this._user = args[1];
            this._firstName = args[2];
            this._lastName = args[3];
            this._email = args[4];
        } else if (args.length === 4) {
            this._user = args[0];
            this._firstName = args[1];
            this._lastName = args[2];
            this._email = args[3];
        } else {
            throw new Error('Invalid number of arguments');
        }
    }

    get id(): number | undefined {
        return this._id;
    }

    get user(): string {
        return this._user;
    }

    set user(value: string) {
        this._user = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}
