import { useEffect } from "react";

import { connect } from "react-redux";

import { ISale } from "../../redux/sale/model/types";
import { boundRequestSales } from "../../redux/sale/actions";
import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../../helpers/reduxToProps";

const mapStateToProps = createMapStateToProps<ISale>(
  (state) => state.sale.sales
);
const mapDispatchToProps = createMapDispatchToProps(boundRequestSales);
type SaleProps = LinkProps<ISale, typeof boundRequestSales>;

const Sale = ({ boundRequestData, data }: SaleProps) => {
  useEffect(() => {
    boundRequestData();
  }, [boundRequestData]);

  return (
    <>
      {data.map((s) => (
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
