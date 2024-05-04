import { Request } from "express";
import { ISale } from "./ISale";

export class Sale implements ISale {
  card_numbers: string;
  day_to_claim_gift: number;
  description: string;
  gift_card_id: number;
  name: string;
  number_of_gifts: number;

  constructor(req: Request) {
    this.card_numbers = req.body.card_numbers;
    this.day_to_claim_gift = req.body.day_to_claim_gift;
    this.description = req.body.description;
    this.gift_card_id = req.body.gift_card_id;
    this.name = req.body.name;
    this.number_of_gifts = req.body.number_of_gifts;
  }
}
