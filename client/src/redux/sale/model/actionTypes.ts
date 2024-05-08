import { ISaleAsync } from "./interfaces";
import * as SALE from "./types";

interface FetchRequest extends ISaleAsync {
  type: typeof SALE.FETCH_REQUEST;
}
interface FetchSuccess extends ISaleAsync {
  type: typeof SALE.FETCH_SUCCESS;
}
interface FetchFailure extends ISaleAsync {
  type: typeof SALE.FETCH_FAILURE;
}

export type SaleActionTypes = FetchFailure | FetchRequest | FetchSuccess;
