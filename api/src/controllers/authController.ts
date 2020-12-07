import { Response } from 'express';
import { authCookie } from '../shared/consts';

export default function (_, res: Response) {
  console.log('auth');
  res.cookie(authCookie, 123, {
    httpOnly: true,
    // secure: true
    // domain: 'localhost'
    // sameSite: ''
  });

  res.sendStatus(204);
}
