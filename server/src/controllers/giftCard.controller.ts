import { Request, Response, NextFunction } from "express";
import * as giftCard from "../services/giftCard.service";

type TExpressParams = (req: Request, res: Response, next: NextFunction) => void;

const getCard = (req: Request) => {
  return {
    name: req.body.name,
    expiration_date: req.body.expiration_date,
    remaining_quantity: req.body.remaining_quantity,
    denomination: req.body.denomination,
  };
};

export const get: TExpressParams = async (_, res, next) => {
  try {
    const data = await giftCard.getAll();
    res.json(data);
  } catch (err) {
    const message = "Error while getting gift cards";

    res.status(500).send({
      message: err.message || message,
    });
    next(err);
  }
};

export const getSingle: TExpressParams = async (req, res, next) => {
  try {
    const data = await giftCard.findById(parseInt(req.params.id));
    res.json(data);
  } catch (err) {
    const message = `Error while getting Gift Card with id ${req.params.id}.`;

    res.status(err.code || 500).json({
      message: err.message || message,
    });
    next(err);
  }
};

export const create: TExpressParams = async (req, res, next) => {
  try {
    const data = await giftCard.create(getCard(req));
    res.json(data);
  } catch (err) {
    const message = "Error while creating Gift Cards";

    res.status(500).json({
      message: err.message || message,
    });
    next(err);
  }
};

export const update: TExpressParams = async (req, res, next) => {
  try {
    const data = await giftCard.update(parseInt(req.params.id), getCard(req));
    res.json(data);
  } catch (err) {
    const message = "Error while updating Gift Card";

    res.status(err.code || 500).json({
      message: err.message || message,
    });
    next(err);
  }
};

export const remove: TExpressParams = async (req, res, next) => {
  try {
    const data = await giftCard.remove(parseInt(req.params.id));
    res.json(data);
  } catch (err) {
    const message = "Error while deleted Gift Card";

    res.status(err.code || 500).json({
      message: err.message || message,
    });
    next(err);
  }
};
