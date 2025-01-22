import express from 'express';
import { engine } from "express-handlebars";
import path from "path";
import cors from 'cors';
import { serverInit } from './services/ServerInit.js';

import authRouter from './routes/auth.routes.js'
import costumerRouter from './routes/customer.routes.js'


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(process.cwd(), "src", "views", "layouts"),
    partialsDir: path.join(process.cwd(), "src", "views", "partials"),
  })
);

app.set("views", path.join(process.cwd(), "src", "views"));
app.set("view engine", ".hbs");

app.use('/api/v1', authRouter);
app.use('/api/v1', costumerRouter);


serverInit(app)