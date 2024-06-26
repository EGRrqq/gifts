import { promiseQuery } from "./db.service";
import { validateRows, validateWithId } from "../utils/helpers.util";
import { ISale } from "../models";

export async function get(
  query: string,
  sort: string,
  page: number,
  limit: number
) {
  let sqlQuery = "SELECT * FROM sales WHERE name LIKE ?";
  const countQuery = "SELECT COUNT(*) as total FROM sales WHERE name LIKE ?";

  if (sort.toLowerCase() === "asc" || sort.toLowerCase() === "desc") {
    sqlQuery += ` ORDER BY name ${sort.toUpperCase()}`;
  }

  const offset = (page - 1) * limit;
  sqlQuery += " LIMIT ? OFFSET ?";

  const rowsValues = [`%${query}%`, limit, offset];
  const { result: rowsResult } = await promiseQuery(sqlQuery, rowsValues);
  const rows = validateRows(rowsResult);

  const { result: totalResult } = await promiseQuery(countQuery, [
    `%${query}%`,
  ]);

  return { rows, total: totalResult[0].total };
}

export async function create(sale: ISale) {
  const { result } = await promiseQuery(`INSERT INTO sales SET ?`, sale);

  if (!result.affectedRows) {
    const message = "Error in creating sale";
    return { message };
  }

  sale.id = result.insertId;
  return sale;
}

export async function findById(id: number) {
  const { result } = await promiseQuery("SELECT * FROM sales WHERE id = ?", [
    id,
  ]);

  validateWithId({ result, id, item: "Sale" });
  return result;
}

export async function remove(id: number) {
  const sale = await findById(id);
  const { result } = await promiseQuery(`DELETE FROM sales WHERE id = ?`, [id]);

  validateWithId({ result, id, item: "Sale" });

  return sale;
}

export async function update(id: number, sale: ISale) {
  const { result } = await promiseQuery(
    "UPDATE sales SET name = ?, gift_card_id = ?, number_of_gifts = ?, day_to_claim_gift = ?, description = ?, card_numbers = ? WHERE id = ?",
    [
      sale.name,
      sale.gift_card_id,
      sale.number_of_gifts,
      sale.day_to_claim_gift,
      sale.description,
      sale.card_numbers,
      id,
    ]
  );

  validateWithId({ result, id, item: "Sale" });

  sale.id = id;
  return sale;
}
