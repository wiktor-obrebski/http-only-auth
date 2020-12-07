import { Response } from 'express';

export default function (_, res: Response) {
  console.log('posts');

  res.send([
    {
      id: 1,
      content: 'Hello, World',
    },
  ]);
}
