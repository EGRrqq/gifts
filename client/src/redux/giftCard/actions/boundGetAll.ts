import axios from "axios";
import { Dispatch } from "redux";

import * as GIFTCARD from "../methods";
import { IGiftCard } from "../model/interfaces";
import { getLink } from "../../../helpers";

export const boundGetAll = () => {
  return (dispatch: Dispatch) => {
    dispatch(GIFTCARD.getAll.request());
    axios
      .get<IGiftCard[]>(getLink("gift-cards"))
      .then((response) => {
        const giftCards = response.data;
        dispatch(GIFTCARD.getAll.receive(giftCards));
      })
      .catch((error) => {
        dispatch(GIFTCARD.getAll.invalidate(error.message));
      });
  };
};
