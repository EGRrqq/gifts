import axios from "axios";
import { Dispatch } from "redux";

import * as SALE from "../methods";
import { getLink } from "../../../helpers";
import { ISale } from "../model/interfaces";

export const boundUpdateData = (sale: ISale) => {
  return (dispatch: Dispatch) => {
    dispatch(SALE.updateData.request());
    axios
      .put<ISale>(getLink("sales") + `/${sale.id}`, sale)
      .then((response) => {
        const data = response.data;
        dispatch(SALE.updateData.receive(data));
      })
      .catch((error) => {
        dispatch(SALE.updateData.invalidate(error.message));
      });
  };
};
