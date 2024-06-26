import { TExpressParams } from "./TExpressParams";
import * as giftCard from "../services/giftCard.service";
import { GiftCard } from "../models";

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
    const data = await giftCard.create(new GiftCard(req));
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
    const data = await giftCard.update(
      parseInt(req.params.id),
      new GiftCard(req)
    );
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
