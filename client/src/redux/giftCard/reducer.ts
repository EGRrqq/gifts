import * as GIFTCARD from "./model/types";

import { IGiftCardAsync } from "./model/interfaces";
import { GiftCardActionTypes } from "./model/actionTypes";

const defaultState: IGiftCardAsync = {
  loading: false,
  cards: [],
  error: "",
};

const giftCardReducer = (
  state = defaultState,
  action: GiftCardActionTypes
): IGiftCardAsync => {
  switch (action.type) {
    case GIFTCARD.FETCH_REQUEST:
      return { loading: true, cards: [], error: "" };
    case GIFTCARD.FETCH_SUCCESS:
      return { loading: false, cards: action.cards, error: "" };
    case GIFTCARD.FETCH_FAILURE:
      return { loading: false, cards: [], error: action.error };
    default:
      return state;
  }
};

export default giftCardReducer;
