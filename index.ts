import express, { Request, Response } from 'express';
import cors from 'cors';
import { connectDB } from './models/connectDB';
import { configDotenv } from 'dotenv';

const allowedOrigins = ['http://localhost:3000', 'http://localhost:4000'];
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || allowedOrigins.includes(origin)) { 
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
const port = process.env.PORT || 4000;
configDotenv();
connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
