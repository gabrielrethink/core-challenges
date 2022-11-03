import cors from 'cors';
import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import expressStatusMonitor from 'express-status-monitor';
import morgan from 'morgan';

import router from './router';

const app = express();

dotenv.config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(expressStatusMonitor());

app.use("/api", router);

app.get("/", (request: Request, response: Response) => {
  response.send("Trabalho RA Core Challenges - Versão 01");
});

export default app;
