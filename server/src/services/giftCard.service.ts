import { promiseQuery } from "./db.service";
import { validateRows } from "../utils/helpers.util";

interface IGiftCard {
  name: string;
  remaining_quantity: number;
  expiration_date: string;
  denomination: number;
}

export async function getMultiple() {
  const data = await promiseQuery("select * from gift_cards");
  const rows = await validateRows(data.result);

  return rows;
}

export async function create(giftCard: IGiftCard) {
  await promiseQuery(`INSERT INTO gift_cards SET ?`, giftCard);

  const message = "Card created successfully";
  return { message };
}
