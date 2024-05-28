import express, { Application, Request, Response } from 'express';
import cors from 'cors'


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
    console.log('hello');

};

app.get('/', getAController);

export default app;