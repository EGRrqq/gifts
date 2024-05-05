import axios from "axios";
import { Dispatch } from "redux";

import { ISale, SaleActionTypes } from "./model/types";
import * as SALE from "./model/actions";
import { getLink } from "../../helpers";

const request = (): SaleActionTypes => ({
  type: SALE.FETCH_REQUEST,
  loading: true,
  sales: [],
  error: "",
});
const receive = (sales: ISale[]): SaleActionTypes => ({
  type: SALE.FETCH_SUCCESS,
  loading: false,
  sales: sales,
  error: "",
});
const invalidate = (message: string): SaleActionTypes => ({
  type: SALE.FETCH_FAILURE,
  loading: false,
  sales: [],
  error: message || "Unable to fetch sales",
});

export const boundRequestSales = () => {
  return (dispatch: Dispatch) => {
    dispatch(request());
    axios
      .get<ISale[]>(getLink("sales"))
      .then((response) => {
        const sales = response.data;
        dispatch(receive(sales));
      })
      .catch((error) => {
        dispatch(invalidate(error.message));
      });
  };
};
