// future tableRow component

import { useEffect } from "react";

import { connect } from "react-redux";

import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../../../helpers/reduxToProps";
import { ISale } from "../../../redux/sale/model/interfaces";
import * as saleActions from "../../../redux/sale/actions";

const mapStateToProps = createMapStateToProps<ISale>(
  (state) => state.sale.sales
);
const mapDispatchToProps = createMapDispatchToProps(saleActions.boundGetAll);
type SaleProps = LinkProps<ISale, typeof saleActions.boundGetAll>;

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
