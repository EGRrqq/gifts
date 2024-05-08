import * as GIFTCARD from "../model/types";
import { IGiftCard } from "../model/interfaces";
import { GiftCardActionTypes } from "../model/actionTypes";

export const request = (): GiftCardActionTypes => ({
  type: GIFTCARD.FETCH_REQUEST,
  loading: true,
  cards: [],
  error: "",
});

export const receive = (cards: IGiftCard[]): GiftCardActionTypes => ({
  type: GIFTCARD.FETCH_SUCCESS,
  loading: false,
  cards: cards,
  error: "",
});

export const invalidate = (message: string): GiftCardActionTypes => ({
  type: GIFTCARD.FETCH_FAILURE,
  loading: false,
  cards: [],
  error: message || "Unable to fetch cards",
});
