import axios from "axios";
import { Dispatch } from "redux";

import * as SALE from "../methods";
import { getLink } from "../../../helpers";
import { ISale } from "../model/interfaces";

export const boundPostData = (sale: ISale) => {
  return (dispatch: Dispatch) => {
    dispatch(SALE.postData.request());
    axios
      .post<ISale>(getLink("sales"), sale)
      .then((response) => {
        const data = response.data;
        dispatch(SALE.postData.receive(data));
      })
      .catch((error) => {
        dispatch(SALE.postData.invalidate(error.message));
      });
  };
};
