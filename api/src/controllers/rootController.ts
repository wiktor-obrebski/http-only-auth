import { Response } from 'express';

export default function (_, res: Response) {
  console.log('root');
  res.send({
    date_time: new Date().toISOString(),
  });
}
