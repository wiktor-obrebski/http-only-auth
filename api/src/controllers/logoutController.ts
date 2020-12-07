import { Response } from 'express';
import { authCookie } from '../shared/consts';

export default async function (_, res: Response) {
  console.log('logout');
  res.clearCookie(authCookie);
  res.sendStatus(204);
}
