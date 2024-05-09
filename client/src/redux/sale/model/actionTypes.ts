import { ISaleAsync } from "./interfaces";
import * as SALE from "./types";

// getAll
interface FetchRequest extends ISaleAsync {
  type: typeof SALE.FETCH_REQUEST;
}
interface FetchSuccess extends ISaleAsync {
  type: typeof SALE.FETCH_SUCCESS;
}
interface FetchFailure extends ISaleAsync {
  type: typeof SALE.FETCH_FAILURE;
}

// postData
interface PostRequest extends ISaleAsync {
  type: typeof SALE.POST_REQUEST;
}
interface PostSuccess extends ISaleAsync {
  type: typeof SALE.POST_SUCCESS;
}
interface PostFailure extends ISaleAsync {
  type: typeof SALE.POST_FAILURE;
}

export type SaleActionTypes =
  | FetchFailure
  | FetchRequest
  | FetchSuccess
  | PostRequest
  | PostSuccess
  | PostFailure;
