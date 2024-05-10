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
