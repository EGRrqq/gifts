export const FETCH_GIFTCARD = "FETCH_GIFTCARD";

export const FETCH_GIFTCARD_REQUEST = "FETCH_GIFTCARD_REQUEST";
export const FETCH_GIFTCARD_SUCCESS = "FETCH_GIFTCARD_SUCCESS";
export const FETCH_GIFTCARD_FAILURE = "FETCH_GIFTCARD_FAILURE";

export interface IGiftCard {
  id: number;
  name: string;
  remaining_quantity: number;
  expiration_date: string;
  denomination: number;
}

export interface IGiftCardAction {
  type: string;
  payload: IGiftCard[];
}
