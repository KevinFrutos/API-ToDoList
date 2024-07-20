import {DatabaseInterface} from "../../domain/DatabaseInterface";
import mysql, {Connection} from "mysql2/promise"

export class MySql implements DatabaseInterface{
    public host: string | undefined;
    public port: string | undefined;
    public user: string | undefined;
    public password: string | undefined;
    public database: string | undefined;

    constructor(){
        this.host = process.env.MYSQL_HOST;
        this.port = process.env.MYSQL_PORT;
        this.user = process.env.MYSQL_USER;
        this.password = process.env.MYSQL_PASSWORD;
        this.database = process.env.MYSQL_DATABASE;
    }

    async getConnection(): Promise<Connection> {
        return mysql.createConnection({
            host: this.host,
            user: this.user,
            database: this.database,
            password: this.password
        })
    }

    disconnect(connection: Connection): void {
        connection.destroy()
    }

}
