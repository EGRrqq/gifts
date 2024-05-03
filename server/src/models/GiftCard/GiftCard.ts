import { Request } from "express";
import { IGiftCard } from "./IGiftCard";

export class GiftCard implements IGiftCard {
  denomination: number;
  expiration_date: string;
  name: string;
  remaining_quantity: number;

  constructor(req: Request) {
    this.name = req.body.name;
    this.expiration_date = req.body.expiration_date;
    this.remaining_quantity = req.body.remaining_quantity;
    this.denomination = req.body.denomination;
  }
}
