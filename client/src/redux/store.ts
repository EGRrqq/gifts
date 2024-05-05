import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import giftCardReducer from "./giftCard/reducer";
import saleReducer from "./sale/reducer";
import { GiftCardActionTypes } from "./giftCard/model/types";

const rootReducer = combineReducers({
  giftCard: giftCardReducer,
  sale: saleReducer,
});

// use pipe for AppActions when add a sales action types
export type AppActions = GiftCardActionTypes;
export type AppState = ReturnType<typeof rootReducer>;

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);

export default store;
