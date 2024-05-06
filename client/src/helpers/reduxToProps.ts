import { ThunkDispatch } from "redux-thunk";
import { AppActions, AppState } from "../redux/store";
import { bindActionCreators } from "redux";

interface LinkStateProps<T> {
  data: T[];
}

interface LinkDispatchProps<A> {
  boundRequestData: () => A;
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
