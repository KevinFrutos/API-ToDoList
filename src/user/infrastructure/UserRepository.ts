import {DatabaseAdapter} from "../../shared/infrastructure/DatabaseAdapter";
import {UserRepositoryInterface} from "../domain/UserRepositoryInterface";
import {ConnectionType, DatabaseType} from "../../shared/infrastructure/databaseTypes";
import {User} from "../domain/User";

export class UserRepository implements UserRepositoryInterface {
    public databaseAdapter: DatabaseAdapter;

    constructor() {
        this.databaseAdapter = new DatabaseAdapter(process.env.DATABASE);
    }

    async findById(id: string) {
        try {
            const database: DatabaseType = this.databaseAdapter.getDatabase();
            const connection: ConnectionType = await database.getConnection();
            const [results, fields] = await connection.execute("SELECT * FROM users WHERE id = ?", [id]);
            database.disconnect(connection);
            return results;
        } catch (e) {
            throw Error("User not found");
        }
    }

    async findAll() {
        try {
            const database: DatabaseType = this.databaseAdapter.getDatabase();
            const connection: ConnectionType = await database.getConnection();
            const [results, fields] = await connection.execute("SELECT * FROM users");
            database.disconnect(connection);
            return results;
        } catch (e) {
            throw Error("Unable to find users");
        }
    }

    async save(entity: User) {
        try {
            const database: DatabaseType = this.databaseAdapter.getDatabase();
            const connection: ConnectionType = await database.getConnection();
            const [results, fields] = await connection.execute("INSERT INTO users (user, first_name, last_name, email) VALUES (?, ?, ?, ?)", [entity.user, entity.firstName, entity.lastName, entity.email]);
            database.disconnect(connection);
        } catch (e) {
            throw Error("Error creating user");
        }
    }

    async saveArray(entities: User[]) {
        try {
            const database: DatabaseType = this.databaseAdapter.getDatabase();
            const connection: ConnectionType = await database.getConnection();
            for (const entity of entities) {
                const [results, fields] = await connection.execute("INSERT INTO users (user, first_name, last_name, email) VALUES (?, ?, ?, ?)", [entity.user, entity.firstName, entity.lastName, entity.email]);
            }
            database.disconnect(connection);
        } catch (e) {
            throw Error("Error saving user");
        }
    }

    async delete(id: string) {
        try {
            const database: DatabaseType = this.databaseAdapter.getDatabase();
            const connection: ConnectionType = await database.getConnection();
            const [results, fields] = await connection.execute("DELETE FROM users WHERE id = ?", [id]);
            database.disconnect(connection);
        } catch (e) {
            throw Error("Error deleting user");
        }
    }
}
