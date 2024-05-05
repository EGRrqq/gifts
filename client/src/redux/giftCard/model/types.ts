import * as GIFTCARD from "./actions";

export interface IGiftCard {
  id: number;
  name: string;
  remaining_quantity: number;
  expiration_date: string;
  denomination: number;
}

export interface IGiftCardAsync {
  loading: boolean;
  cards: IGiftCard[];
  error: string;
}

interface FetchRequest extends IGiftCardAsync {
  type: typeof GIFTCARD.FETCH_REQUEST;
}
interface FetchSuccess extends IGiftCardAsync {
  type: typeof GIFTCARD.FETCH_SUCCESS;
}
interface FetchFailure extends IGiftCardAsync {
  type: typeof GIFTCARD.FETCH_FAILURE;
}

export type GiftCardActionTypes = FetchFailure | FetchRequest | FetchSuccess;
