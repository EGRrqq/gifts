import * as SALE from "./actions";

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

interface FetchRequest extends ISaleAsync {
  type: typeof SALE.FETCH_REQUEST;
}
interface FetchSuccess extends ISaleAsync {
  type: typeof SALE.FETCH_SUCCESS;
}
interface FetchFailure extends ISaleAsync {
  type: typeof SALE.FETCH_FAILURE;
}

export type SaleActionTypes = FetchFailure | FetchRequest | FetchSuccess;
