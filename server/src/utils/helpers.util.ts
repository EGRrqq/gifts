export function validateRows(rows: any[]) {
  if (!rows) return [];

  return rows;
}

export function validateWithId(result: any, id: number) {
  if (!result.length && !result.affectedRows) {
    const message = `Not found Gift Card with id ${id}.`;
    const err: Record<string, any> = new Error(message);
    err.code = 404;
    throw err;
  }
}
