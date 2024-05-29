import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { ProjectRoutes } from './app/modules/projects/project.route';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/projects', ProjectRoutes);

const getAController = (req: Request, res: Response) => {
    console.log('hello');

};

app.get('/', getAController);

export default app;