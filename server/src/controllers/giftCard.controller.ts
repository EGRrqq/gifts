import { Request, Response, NextFunction } from "express";
import { getMultiple } from "../services/giftCard.service";

type TExpressParams = (req: Request, res: Response, next: NextFunction) => void;

export const get: TExpressParams = async (_, res, next) => {
  try {
    res.json(await getMultiple());
  } catch (err) {
    console.error(`Error while getting gift cards`, err.message);
    next(err);
  }
};
