import {App} from "./server/infrastructure/service/App";
import dotenv from 'dotenv';
dotenv.config();

const app = new App();
const port: number = parseInt(process.env.PORT ?? "9000");
app.start(port)