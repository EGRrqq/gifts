import { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { IGiftCard } from "./redux/giftCard/model/types";
import { AppActions, AppState } from "./redux/store";
import { boundRequestCards } from "./redux/giftCard/actions";

interface Props {}

interface LinkStateProps {
  cards: IGiftCard[];
}

interface LinkDispatchProps {
  boundRequestCards: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  cards: state.giftCard.cards,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, void, AppActions>
) => ({
  boundRequestCards: bindActionCreators(boundRequestCards, dispatch),
});

const App = ({ boundRequestCards, cards }: LinkProps) => {
  useEffect(() => {
    boundRequestCards();
  }, [boundRequestCards]);

  return (
    <>
      {cards.map((c) => (
        <section key={c.id}>
          <h1>Gift Card</h1>
          <p>Name: {c.name}</p>
          <p>Remaining Quantity: {c.remaining_quantity}</p>
          <p>Expiration Date: {c.expiration_date}</p>
          <p>Denomination: {c.denomination}</p>
        </section>
      ))}
    </>
  );
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
