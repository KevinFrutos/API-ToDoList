import express from 'express';

export class App {
    start(port: number) {
        const app = express();

        app.get('/', (req, res) => {
            res.send('Hello, TypeScript with Express!');
        });

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
}