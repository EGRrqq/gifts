import { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ISale } from "../redux/sale/model/types";
import { AppActions, AppState } from "../redux/store";
import { boundRequestSales } from "../redux/sale/actions";

interface Props {}

interface LinkStateProps {
  sales: ISale[];
}

interface LinkDispatchProps {
  boundRequestSales: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  sales: state.sale.sales,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, AppActions>
) => ({
  boundRequestSales: bindActionCreators(boundRequestSales, dispatch),
});

const Sale = ({ boundRequestSales, sales }: LinkProps) => {
  useEffect(() => {
    boundRequestSales();
  }, [boundRequestSales]);

  return (
    <>
      {sales.map((s) => (
        <section key={s.id}>
          <h1>Name: {s.name}</h1>
          <p>number_of_gifts: {s.number_of_gifts}</p>
        </section>
      ))}
    </>
  );
};

const ConnectedSale = connect(mapStateToProps, mapDispatchToProps)(Sale);
export default ConnectedSale;
