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
    // getAll
    case SALE.FETCH_REQUEST:
      return { ...state, loading: true };
    case SALE.FETCH_SUCCESS:
      return { ...state, loading: false, sales: action.sales };
    case SALE.FETCH_FAILURE:
      return { ...state, loading: false, error: action.error };

    // postData
    case SALE.POST_REQUEST:
      return { ...state, loading: true };
    case SALE.POST_SUCCESS:
      return {
        ...state,
        loading: false,
        sales: [...state.sales, ...action.sales],
      };
    case SALE.POST_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default saleReducer;
