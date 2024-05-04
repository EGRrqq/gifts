import { TExpressParams } from "./TExpressParams";
import * as sales from "../services/sales.service";
import { Sale } from "../models";

export const get: TExpressParams = async (_, res, next) => {
  try {
    const data = await sales.getAll();
    res.json(data);
  } catch (err) {
    const message = "Error while getting sales";

    res.status(500).send({
      message: err.message || message,
    });
    next(err);
  }
};

export const create: TExpressParams = async (req, res, next) => {
  try {
    const data = await sales.create(new Sale(req));
    res.json(data);
  } catch (err) {
    const message = "Error while creating Sale";

    res.status(500).json({
      message: err.message || message,
    });
    next(err);
  }
};
