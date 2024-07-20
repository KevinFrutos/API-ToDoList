import {MySql} from "../mysql/infrastructure/MySql";

export class DatabaseAdapter {
    private mysqlName: string = "mysql";

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    getDatabase(): any {
        switch (this.name) {
            case this.mysqlName:
                return new MySql();
            default:
                return new MySql();
        }
    }
}
