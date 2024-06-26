import { promiseQuery } from "./db.service";
import { validateRows, validateWithId } from "../utils/helpers.util";
import { IGiftCard } from "../models";

export async function getAll() {
  const { result } = await promiseQuery("select * from gift_cards");
  const rows = validateRows(result);

  return rows;
}

export async function create(giftCard: IGiftCard) {
  const { result } = await promiseQuery(
    `INSERT INTO gift_cards SET ?`,
    giftCard
  );

  if (!result.affectedRows) {
    const message = "Error in creating gift card";
    return { message };
  }

  giftCard.id = result.insertId;
  return giftCard;
}

export async function findById(id: number) {
  const { result } = await promiseQuery(
    "SELECT * FROM gift_cards WHERE id = ?",
    [id]
  );

  validateWithId({ result, id, item: "Gift Card" });
  return result;
}

export async function remove(id: number) {
  const { result } = await promiseQuery(`DELETE FROM gift_cards WHERE id = ?`, [
    id,
  ]);

  validateWithId({ result, id, item: "Gift Card" });
  const message = "Gift card removed successfully";
  return { message };
}

export async function update(id: number, giftCard: IGiftCard) {
  const { name, denomination, expiration_date, remaining_quantity } = giftCard;

  const { result } = await promiseQuery(
    "UPDATE gift_cards SET name = ?, remaining_quantity = ?, expiration_date = ?, denomination = ? WHERE id = ?",
    [name, remaining_quantity, expiration_date, denomination, id]
  );

  validateWithId({ result, id, item: "Gift Card" });
  const message = "Gift Card updated successfully";
  return { message };
}
