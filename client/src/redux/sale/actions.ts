import axios from "axios";
import { Dispatch } from "redux";

import * as SALE from "./methods";
import { getLink } from "../../helpers";
import { ISale } from "./model/interfaces";

export const boundRequestSales = () => {
  return (dispatch: Dispatch) => {
    dispatch(SALE.getAll.request());
    axios
      .get<ISale[]>(getLink("sales"))
      .then((response) => {
        const sales = response.data;
        dispatch(SALE.getAll.receive(sales));
      })
      .catch((error) => {
        dispatch(SALE.getAll.invalidate(error.message));
      });
  };
};
