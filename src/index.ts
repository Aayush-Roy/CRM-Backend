import express from 'express';
import type { Application, Request, Response } from "express"
import ServerConfig from "./config/server.config.ts"
// import dotenv from 'dotenv';

// dotenv.config();

const app: Application = express();
const port = ServerConfig.PORT || 8000;

app.get('/ping', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
