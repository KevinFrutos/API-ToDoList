import {MySql} from "../mysql/infrastructure/MySql";
import {DatabaseType} from "./databaseTypes";

export class DatabaseAdapter {
    private mysqlName: string = "mysql";

    public name: string | undefined;

    constructor(name: string | undefined) {
        this.name = name;
    }

    getDatabase(): DatabaseType {
        switch (this.name) {
            case this.mysqlName:
                return new MySql();
            default:
                return new MySql();
        }
    }
}
