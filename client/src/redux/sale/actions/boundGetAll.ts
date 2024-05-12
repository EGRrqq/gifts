import axios from "axios";
import { Dispatch } from "redux";

import * as SALE from "../methods";
import { getLink } from "../../../helpers";
import { ISale } from "../model/interfaces";

interface IFetch {
  rows: ISale[];
  total: number;
}

export const boundGetAll = (
  name?: string,
  sort?: "ASC" | "DESC" | "",
  page?: string,
  limit?: string
) => {
  return (dispatch: Dispatch) => {
    dispatch(SALE.getAll.request());
    axios
      .get<IFetch>(getLink("sales"), {
        params: {
          name,
          sort,
          page,
          limit,
        },
      })
      .then((response) => {
        const { rows, total } = response.data;
        dispatch(SALE.getAll.receive(rows, total));
      })
      .catch((error) => {
        dispatch(SALE.getAll.invalidate(error.message));
      });
  };
};
