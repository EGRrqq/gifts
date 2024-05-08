import { SaleActionTypes } from "./model/actionTypes";
import { ISaleAsync } from "./model/interfaces";
import * as SALE from "./model/types";

const defaultState: ISaleAsync = {
  loading: false,
  sales: [],
  error: "",
};

const saleReducer = (
  state = defaultState,
  action: SaleActionTypes
): ISaleAsync => {
  switch (action.type) {
    case SALE.FETCH_REQUEST:
      return { loading: true, sales: [], error: "" };
    case SALE.FETCH_SUCCESS:
      return { loading: false, sales: action.sales, error: "" };
    case SALE.FETCH_FAILURE:
      return { loading: false, sales: [], error: action.error };
    default:
      return state;
  }
};

export default saleReducer;
