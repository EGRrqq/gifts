import { promiseQuery } from "./db.service";
import { validateRows, validateWithId } from "../utils/helpers.util";

interface IGiftCard {
  name: string;
  remaining_quantity: number;
  expiration_date: string;
  denomination: number;
}

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

  let message = "";
  result.affectedRows
    ? (message = "Gift Card created successfully")
    : (message = "Error in creating gift card");

  return { message };
}

export async function findById(id: number) {
  const { result } = await promiseQuery(
    "SELECT * FROM gift_cards WHERE id = ?",
    [id]
  );

  validateWithId(result, id);
  return result;
}

export async function remove(id: number) {
  const { result } = await promiseQuery(`DELETE FROM gift_cards WHERE id = ?`, [
    id,
  ]);

  validateWithId(result, id);
  const message = "Gift card removed successfully";
  return { message };
}

export async function update(id: number, giftCard: IGiftCard) {
  const { name, denomination, expiration_date, remaining_quantity } = giftCard;

  const { result } = await promiseQuery(
    "UPDATE gift_cards SET name = ?, remaining_quantity = ?, expiration_date = ?, denomination = ? WHERE id = ?",
    [name, remaining_quantity, expiration_date, denomination, id]
  );

  validateWithId(result, id);
  const message = "Gift Card updated successfully";
  return { message };
}
