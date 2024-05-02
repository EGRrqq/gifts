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
    res.json(await giftCard.getAll());
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

    if (!data.length) {
      const message = `Not found card with id ${req.params.id}.`;

      res.status(404).json({ message });
      next(new Error(message));
    } else {
      res.json(data);
    }
  } catch (err) {
    const message = `Error while getting card with id ${req.params.id}.`;

    res.status(500).json({
      message: err.message || message,
    });
    next(err);
  }
};

export const create: TExpressParams = async (req, res, next) => {
  try {
    await giftCard.create(getCard(req));

    const message = "Card created successfully";
    res.json({ message });
  } catch (err) {
    const message = "Error while creating gift cards";

    res.status(500).json({
      message: err.message || message,
    });
    next(err);
  }
};

export const update: TExpressParams = async (req, res, next) => {
  try {
    const data = await giftCard.update(parseInt(req.params.id), getCard(req));

    if (!data.affectedRows) {
      const message = `Not found card with id ${req.params.id}.`;

      res.status(404).json({ message });
      next(new Error(message));
    } else {
      const message = "Card updated successfully";

      res.json({ message });
    }
  } catch (err) {
    const message = "Error while updating gift cards";

    res.status(500).send({
      message: err.message || message,
    });
    next(err);
  }
};

export const remove: TExpressParams = async (req, res, next) => {
  try {
    const data = await giftCard.remove(parseInt(req.params.id));

    if (data.affectedRows) {
      const message = "Card deleted successfully";
      res.json({ message });
    }
  } catch (err) {
    const message = "Error while deleted gift card";

    res.status(500).json({
      message: err.message || message,
    });
    next(err);
  }
};
