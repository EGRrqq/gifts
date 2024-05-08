import { SaleActionTypes } from "../model/actionTypes";
import { ISale } from "../model/interfaces";
import * as SALE from "../model/types";

export const request = (): SaleActionTypes => ({
  type: SALE.FETCH_REQUEST,
  loading: true,
  sales: [],
  error: "",
});
export const receive = (sales: ISale[]): SaleActionTypes => ({
  type: SALE.FETCH_SUCCESS,
  loading: false,
  sales: sales,
  error: "",
});
export const invalidate = (message: string): SaleActionTypes => ({
  type: SALE.FETCH_FAILURE,
  loading: false,
  sales: [],
  error: message || "Unable to fetch sales",
});
