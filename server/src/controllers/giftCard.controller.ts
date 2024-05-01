import { Request, Response, NextFunction } from "express";
import * as giftCard from "../services/giftCard.service";

type TExpressParams = (req: Request, res: Response, next: NextFunction) => void;

export const get: TExpressParams = async (_, res, next) => {
  try {
    res.json(await giftCard.getMultiple());
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error while getting gift cards",
    });
    next(err);
  }
};

export const create: TExpressParams = async (req, res, next) => {
  try {
    res.json(
      await giftCard.create({
        name: req.body.name,
        expiration_date: req.body.expiration_date,
        remaining_quantity: req.body.remaining_quantity,
        denomination: req.body.denomination,
      })
    );
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error while creating gift cards",
    });
    next(err);
  }
};
