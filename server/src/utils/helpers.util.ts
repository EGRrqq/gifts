import { Request } from "express";

interface IValidateWithId {
  result: any;
  id: number;
  item: "Gift Card" | "Sale";
}

export function validateRows(rows: any[]) {
  if (!rows) return [];

  return rows;
}

export function validateWithId({ result, id, item }: IValidateWithId) {
  if (!result.length && !result.affectedRows) {
    const message = `Not found ${item} with id ${id}.`;
    const err: Record<string, any> = new Error(message);
    err.statusCode = 404;
    throw err;
  }
}

export function validateQueryParam(
  req: Request,
  param: string,
  defaultValue: any
) {
  queryToLowerKeys(req);

  const lowerParam = param.toLowerCase();
  return req.query[lowerParam] ? req.query[lowerParam] : defaultValue;
}

function queryToLowerKeys(req: Request) {
  for (const key in req.query) {
    if (key.toLowerCase() !== key) {
      req.query[key.toLowerCase()] = req.query[key];
      delete req.query[key];
    }
  }
}
