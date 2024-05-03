import { NextFunction, Request, Response } from "express";

export type TExpressParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
