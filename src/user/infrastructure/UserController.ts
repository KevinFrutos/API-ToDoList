import { Request, Response } from 'express';
import {UserRepository} from "./UserRepository";
import {CreateUserUseCase} from "../application/CreateUserUseCase";
import { User } from '../domain/User';

class UserController {
    public async createUser(req: Request, res: Response) {
        try {
            const {user: userName, firstName, lastName, email} = req.body;
            const userRepository = new UserRepository();
            const createUserUseCase = new CreateUserUseCase(userRepository);
            const user = new User(userName, firstName, lastName, email);
            await createUserUseCase.createUser(user);
            res.status(201).send('User created successfully');
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}

export default UserController;
