import { promiseQuery } from "./db.service";
import { validateRows, validateWithId } from "../utils/helpers.util";
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

export async function findById(id: number) {
  const { result } = await promiseQuery("SELECT * FROM sales WHERE id = ?", [
    id,
  ]);

  validateWithId({ result, id, item: "Sale" });
  return result;
}

export async function remove(id: number) {
  const { result } = await promiseQuery(`DELETE FROM sales WHERE id = ?`, [id]);

  validateWithId({ result, id, item: "Sale" });
  const message = "Sale removed successfully";
  return { message };
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
  const message = "Sale updated successfully";
  return { message };
}
