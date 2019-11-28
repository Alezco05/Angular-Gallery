import express from 'express';
import morgan from 'morgan';
import path from 'path'
import cors from 'cors';

const app = express();

import indexRoutes from './routes/index'

//Settings
app.set('port', process.env.PORT || 3800);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api', indexRoutes);

//Imagenes 
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;