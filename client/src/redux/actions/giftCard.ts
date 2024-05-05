import axios from "axios";
import { FETCH_GIFTCARD, IGiftCard } from "./types";
import { getLink } from "../../helpers";

export const fetchGiftCard = () => async (dispatch: any) => {
  const response = await axios.get<IGiftCard[]>(getLink("gift-cards"));
  dispatch({ type: FETCH_GIFTCARD, payload: response.data });
};
