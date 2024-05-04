import { promiseQuery } from "./db.service";
import { validateRows } from "../utils/helpers.util";
import { ISale } from "../models";

export async function getAll() {
  const { result } = await promiseQuery("select * from sales");
  const rows = validateRows(result);

  return rows;
}

export async function create(sale: ISale) {
  const { result } = await promiseQuery(`INSERT INTO sales SET ?`, sale);

  let message = "";
  result.affectedRows
    ? (message = "Sale created successfully")
    : (message = "Error in creating sale");

  return { message };
}
