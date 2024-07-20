export interface DatabaseInterface {
    host: string | undefined;
    port: string | undefined;
    user: string | undefined;
    password: string | undefined;
    database: string | undefined;
    getConnection(): any;
    disconnect(connection: any): void;
}
