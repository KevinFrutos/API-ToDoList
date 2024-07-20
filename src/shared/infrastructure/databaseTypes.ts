import {Connection as MySQLConnection} from "mysql2/promise";
import {MySql} from "../mysql/infrastructure/MySql";

export type DatabaseType = MySql
export type ConnectionType = MySQLConnection;
