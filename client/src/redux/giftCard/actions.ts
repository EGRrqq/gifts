import axios from "axios";
import { Dispatch } from "redux";

import { IGiftCard, GiftCardActionTypes } from "./model/types";
import * as GIFTCARD from "./model/actions";
import { getLink } from "../../helpers";

const request = (): GiftCardActionTypes => ({
  type: GIFTCARD.FETCH_REQUEST,
  loading: true,
  cards: [],
  error: "",
});
const receive = (cards: IGiftCard[]): GiftCardActionTypes => ({
  type: GIFTCARD.FETCH_SUCCESS,
  loading: false,
  cards: cards,
  error: "",
});
const invalidate = (message: string): GiftCardActionTypes => ({
  type: GIFTCARD.FETCH_FAILURE,
  loading: false,
  cards: [],
  error: message || "Unable to fetch cards",
});

export const boundRequestCards = () => {
  return (dispatch: Dispatch) => {
    dispatch(request());
    axios
      .get<IGiftCard[]>(getLink("gift-cards"))
      .then((response) => {
        const giftCards = response.data;
        dispatch(receive(giftCards));
      })
      .catch((error) => {
        dispatch(invalidate(error.message));
      });
  };
};
