import axios from "axios";
import { Dispatch } from "redux";

import * as SALE from "../methods";
import { getLink } from "../../../helpers";
import { ISale } from "../model/interfaces";

export const boundDeleteData = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(SALE.deleteData.request());
    axios
      .delete<[ISale]>(getLink("sales") + `/${id}`)
      .then((response) => {
        const data = response.data;
        dispatch(SALE.deleteData.receive(data));
      })
      .catch((error) => {
        dispatch(SALE.deleteData.invalidate(error.message));
      });
  };
};
