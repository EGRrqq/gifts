import { ThunkDispatch } from "redux-thunk";
import { AppActions, AppState } from "../redux/store";
import { AnyAction, bindActionCreators, Dispatch } from "redux";

// todo: correct support action method
// redo LinkDispatchProps, typeof action obj
// createMapDispatchToProps iterate over obj keys

interface LinkStateProps<T> {
  data: T[];
}

interface LinkDispatchProps<T, A> {
  boundData: (dataItem?: T) => (dispatch: Dispatch<AnyAction>) => A;
}

export type LinkProps<T, A> = LinkStateProps<T> & LinkDispatchProps<T, A>;

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
      boundData: bindActionCreators(actionCreator, dispatch),
    };
  };
};
