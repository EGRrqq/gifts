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
      return {
        ...state,
        loading: false,
        sales: action.sales,
        totalAmount: action.totalAmount,
      };

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

    // deleteData
    case SALE.DELETE_REQUEST:
      return { ...state, loading: true };
    case SALE.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        sales: state.sales.filter((s) => s.id !== action.sales[0].id),
      };
    case SALE.DELETE_FAILURE:
      return { ...state, loading: false, error: action.error };

    // updateData
    case SALE.UPDATE_REQUEST:
      return { ...state, loading: true };
    case SALE.UPDATE_SUCCESS: {
      const index = state.sales.findIndex((s) => s.id === action.sales[0].id);
      state.sales[index] = action.sales[0];

      return {
        ...state,
        loading: false,
        sales: [...state.sales],
      };
    }
    case SALE.UPDATE_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default saleReducer;
