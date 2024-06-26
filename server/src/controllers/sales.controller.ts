import { TExpressParams } from "./TExpressParams";
import * as sale from "../services/sales.service";
import { Sale } from "../models";
import { validateQueryParam } from "../utils/helpers.util";

export const get: TExpressParams = async (req, res, next) => {
  try {
    const name = validateQueryParam(req, "name", "");
    const sort = validateQueryParam(req, "sort", "");
    const page = validateQueryParam(req, "page", 1);
    const limit = validateQueryParam(req, "limit", 999999);

    const data = await sale.get(
      name.toString(),
      sort.toString(),
      Number(page),
      Number(limit)
    );
    res.json(data);
  } catch (err) {
    const message = "Error while getting sales";

    res.status(500).json({
      message: err.message || message,
    });
    next(err);
  }
};

export const create: TExpressParams = async (req, res, next) => {
  try {
    const data = await sale.create(new Sale(req));
    res.json(data);
  } catch (err) {
    const message = "Error while creating Sale";

    res.status(500).json({
      message: err.message || message,
    });
    next(err);
  }
};

export const getSingle: TExpressParams = async (req, res, next) => {
  try {
    const data = await sale.findById(parseInt(req.params.id));
    res.json(data);
  } catch (err) {
    const message = `Error while getting Sale with id ${req.params.id}.`;

    res.status(err.statusCode || 500).json({
      message: err.message || message,
    });
    next(err);
  }
};

export const update: TExpressParams = async (req, res, next) => {
  try {
    const data = await sale.update(parseInt(req.params.id), new Sale(req));
    res.json(data);
  } catch (err) {
    const message = "Error while updating Sale";

    res.status(err.statusCode || 500).json({
      message: err.message || message,
    });
    next(err);
  }
};

export const remove: TExpressParams = async (req, res, next) => {
  try {
    const data = await sale.remove(parseInt(req.params.id));
    res.json(data);
  } catch (err) {
    const message = "Error while deleted Sale";

    res.status(err.statusCode || 500).json({
      message: err.message || message,
    });
    next(err);
  }
};
