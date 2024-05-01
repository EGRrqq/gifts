import mysql from "mysql";
import { dbConfig } from "../db";
import { promiseQuery } from "./db.service";
import { validateRows } from "../utils/helpers.util";

export async function getMultiple() {
  const dbPool = mysql.createPool(dbConfig);
  const data = await promiseQuery(dbPool, "select * from gift_cards");
  const rows = await validateRows(data.result);

  return rows;
}
