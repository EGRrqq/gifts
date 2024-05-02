import { Request, Response, NextFunction } from "express";
import * as giftCard from "../services/giftCard.service";

type TExpressParams = (req: Request, res: Response, next: NextFunction) => void;

export const get: TExpressParams = async (_, res, next) => {
  try {
    res.json(await giftCard.getAll());
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error while getting gift cards",
    });
    next(err);
  }
};

export const getSingle: TExpressParams = async (req, res, next) => {
  try {
    const data = await giftCard.findById(parseInt(req.params.id));

    !data.length
      ? res.status(404).send({
          message: `Not found card with id ${req.params.id}.`,
        })
      : res.json(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || `Error while getting card with id ${req.params.id}.`,
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
