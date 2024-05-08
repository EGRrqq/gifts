export interface ISale {
  id: number;
  name: string;
  number_of_gifts: number;
  gift_card_id: number;
  day_to_claim_gift: number;
  description: string;
  card_numbers: string;
}

export interface ISaleAsync {
  loading: boolean;
  sales: ISale[];
  error: string;
}
