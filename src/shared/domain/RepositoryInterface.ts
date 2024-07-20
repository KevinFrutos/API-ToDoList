interface RepositoryInterface {
    findById(id: string): any;
    save(entity: any): any;
    delete(id: string): any;
}
