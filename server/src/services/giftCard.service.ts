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
  await promiseQuery(`INSERT INTO gift_cards SET ?`, giftCard);

  const message = "Card created successfully";
  return { message };
}
