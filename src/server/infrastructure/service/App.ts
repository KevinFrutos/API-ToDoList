import express from 'express';

// CONTROLLERS
import UserController from "../../../user/infrastructure/UserController";

export class App {
    start(port: number) {
        const app = express();
        app.use(express.json());

        app.get(`${process.env.APIV1}/`, (req, res) => {
            res.send('¡TODOLIST API IS ALIVE!');
        });

        const userController = new UserController();
        app.post(`${process.env.APIV1}/user/create`, (req, res) => {
            userController.createUser(req, res);
        });

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
}