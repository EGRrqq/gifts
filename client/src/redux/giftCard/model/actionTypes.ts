import * as GIFTCARD from "./types";
import { IGiftCardAsync } from "./interfaces";

// getAll
interface FetchRequest extends IGiftCardAsync {
  type: typeof GIFTCARD.FETCH_REQUEST;
}
interface FetchSuccess extends IGiftCardAsync {
  type: typeof GIFTCARD.FETCH_SUCCESS;
}
interface FetchFailure extends IGiftCardAsync {
  type: typeof GIFTCARD.FETCH_FAILURE;
}

export type GiftCardActionTypes = FetchFailure | FetchRequest | FetchSuccess;
