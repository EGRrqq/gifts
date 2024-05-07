import { ThunkDispatch } from "redux-thunk";
import { AppActions, AppState } from "../redux/store";
import { AnyAction, bindActionCreators, Dispatch } from "redux";

interface LinkStateProps<T> {
  data: T[];
}

interface LinkDispatchProps<A> {
  boundRequestData: () => (dispatch: Dispatch<AnyAction>) => A;
}

export type LinkProps<T, A> = LinkStateProps<T> & LinkDispatchProps<A>;

export const createMapStateToProps = <T>(
  dataSelector: (state: AppState) => T[]
) => {
  return (state: AppState): LinkStateProps<T> => ({
    data: dataSelector(state),
  });
};

export const createMapDispatchToProps = <A>(actionCreator: () => A) => {
  return (dispatch: ThunkDispatch<AppState, void, AppActions>) => {
    return {
      boundRequestData: bindActionCreators(actionCreator, dispatch),
    };
  };
};
