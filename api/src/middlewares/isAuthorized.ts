import { Response, Request, NextFunction } from 'express';
import { authCookie } from '../shared/consts';

export default function isAuthorized(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { cookies } = req;

  // if (!('x-auth' in req.headers)) {
  //   res.status(401).send("No custom header");
  // }
  if (cookies[authCookie]) {
    next();
  } else {
    res.status(401).send("No cookie auth");
  }
}
