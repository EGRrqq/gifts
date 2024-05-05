import { FETCH_GIFTCARD, IGiftCard, IGiftCardAction } from "../actions/types";

export default (state: IGiftCard[] = [], action: IGiftCardAction) => {
  switch (action.type) {
    case FETCH_GIFTCARD:
      return action.payload;
    default:
      return state;
  }
};
