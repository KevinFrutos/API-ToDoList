import {User} from "../domain/User";
import {UserRepositoryInterface} from "../domain/UserRepositoryInterface";

export class CreateUserUseCase {

    constructor(private userRepositoryInterface: UserRepositoryInterface) {}

    async createUser(user: User) {
        this.userRepositoryInterface.save(user)
    }
}
