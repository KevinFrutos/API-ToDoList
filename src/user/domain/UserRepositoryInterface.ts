export interface UserRepositoryInterface extends RepositoryInterface {
    findById(id: string): any;
    findAll(): any;
    save(entity: any): void;
    saveArray(entities: any[]): void;
    delete(id: string): void;
}
