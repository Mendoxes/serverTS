import express, { Request, Response } from 'express';
import cors from 'cors';

import { apiRouter } from './serverComponents/api';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

const PORT = process.env.PORT || 8088
app.listen(PORT, () =>
{
  console.log(`Server started on port ${PORT}`);
});