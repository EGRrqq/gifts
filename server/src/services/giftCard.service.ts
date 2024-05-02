import { promiseQuery } from "./db.service";
import { validateRows } from "../utils/helpers.util";

interface IGiftCard {
  name: string;
  remaining_quantity: number;
  expiration_date: string;
  denomination: number;
}

export async function getAll() {
  const data = await promiseQuery("select * from gift_cards");
  const rows = await validateRows(data.result);

  return rows;
}
export async function findById(id: number) {
  const data = await promiseQuery("SELECT * FROM gift_cards WHERE id = ?", [
    id,
  ]);

  return data.result;
}

export async function create(giftCard: IGiftCard) {
  const { result } = await promiseQuery(
    `INSERT INTO gift_cards SET ?`,
    giftCard
  );

  return result;
}

export async function update(id: number, giftCard: IGiftCard) {
  const { name, denomination, expiration_date, remaining_quantity } = giftCard;

  const { result } = await promiseQuery(
    "UPDATE gift_cards SET name = ?, remaining_quantity = ?, expiration_date = ?, denomination = ? WHERE id = ?",
    [name, remaining_quantity, expiration_date, denomination, id]
  );

  return result;
}
