import { SaleActionTypes } from "../model/actionTypes";
import { ISale } from "../model/interfaces";
import * as SALE from "../model/types";

export const request = (): SaleActionTypes => ({
  type: SALE.FETCH_REQUEST,
  loading: true,
  sales: [],
  totalAmount: 0,
  error: "",
});
export const receive = (sales: ISale[], amount: number): SaleActionTypes => ({
  type: SALE.FETCH_SUCCESS,
  loading: false,
  sales: sales,
  totalAmount: amount,
  error: "",
});
export const invalidate = (message: string): SaleActionTypes => ({
  type: SALE.FETCH_FAILURE,
  loading: false,
  sales: [],
  totalAmount: 0,
  error: message || "Unable to fetch sales",
});
