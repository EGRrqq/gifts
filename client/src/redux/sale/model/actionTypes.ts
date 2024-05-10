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

// deleteData
interface DeleteRequest extends ISaleAsync {
  type: typeof SALE.DELETE_REQUEST;
}
interface DeleteSuccess extends ISaleAsync {
  type: typeof SALE.DELETE_SUCCESS;
}
interface DeleteFailure extends ISaleAsync {
  type: typeof SALE.DELETE_FAILURE;
}

// updateData
interface UpdateRequest extends ISaleAsync {
  type: typeof SALE.UPDATE_REQUEST;
}
interface UpdateSuccess extends ISaleAsync {
  type: typeof SALE.UPDATE_SUCCESS;
}
interface UpdateFailure extends ISaleAsync {
  type: typeof SALE.UPDATE_FAILURE;
}

export type SaleActionTypes =
  | FetchFailure
  | FetchRequest
  | FetchSuccess
  | PostRequest
  | PostSuccess
  | PostFailure
  | DeleteRequest
  | DeleteSuccess
  | DeleteFailure
  | UpdateRequest
  | UpdateSuccess
  | UpdateFailure;
