import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGiftCard } from "./redux/actions/giftCard";

const App = ({ fetchGiftCard, giftCard }: any) => {
  useEffect(() => {
    fetchGiftCard();
  }, [fetchGiftCard]);

  console.log();
  return (
    <>
      {giftCard.map((c) => (
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

const mapStateToProps = (state: any) => {
  return { giftCard: state.giftCard };
};

export default connect(mapStateToProps, { fetchGiftCard })(App);
