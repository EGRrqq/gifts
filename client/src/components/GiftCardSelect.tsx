import { useEffect, useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { IGiftCard } from "../redux/giftCard/model/types";
import { AppActions, AppState } from "../redux/store";
import { boundRequestCards } from "../redux/giftCard/actions";
import GiftCard from "./GiftCard";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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

const GiftCardSelect = ({ boundRequestCards, cards }: LinkProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    boundRequestCards();
  }, [boundRequestCards]);

  return (
    <FormControl fullWidth>
      <InputLabel id="gift-cards-label">Gift Cards</InputLabel>
      <Select
        labelId="gift-cards-label"
        id="gift-cards"
        value={value}
        label="Gift Cards"
        onChange={(e) => setValue(Number(e.target.value))}
      >
        {cards.map((c) => (
          <MenuItem style={{ display: "flex" }} key={c.id} value={c.id}>
            <GiftCard card={c} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const ConnectedGiftCardSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftCardSelect);
export default ConnectedGiftCardSelect;
