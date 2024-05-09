import { SaleActionTypes } from "../model/actionTypes";
import { ISale } from "../model/interfaces";
import * as SALE from "../model/types";

export const request = (): SaleActionTypes => ({
  type: SALE.POST_REQUEST,
  loading: true,
  sales: [],
  error: "",
});
export const receive = (sale: ISale): SaleActionTypes => ({
  type: SALE.POST_SUCCESS,
  loading: false,
  sales: [sale],
  error: "",
});
export const invalidate = (message: string): SaleActionTypes => ({
  type: SALE.POST_FAILURE,
  loading: false,
  sales: [],
  error: message || "Unable to post sale",
});
