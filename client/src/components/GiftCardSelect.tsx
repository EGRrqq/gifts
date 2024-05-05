import { useEffect } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { IGiftCard } from "../redux/giftCard/model/types";
import { AppActions, AppState } from "../redux/store";
import { boundRequestCards } from "../redux/giftCard/actions";
import GiftCard from "./GiftCard";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  useTheme,
} from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

interface Props {
  value: string;
  name: string;
  onChange: SelectInputProps<string>["onChange"];
  onBlur: SelectInputProps<string>["onBlur"];
  error: SelectInputProps<string>["error"];
  helperText?: boolean | string;
}

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

const GiftCardSelect = ({
  boundRequestCards,
  cards,
  value,
  name,
  onChange,
  onBlur,
  error,
  helperText,
}: LinkProps) => {
  const theme = useTheme();

  useEffect(() => {
    boundRequestCards();
  }, [boundRequestCards]);

  return (
    <FormControl fullWidth>
      <InputLabel id="gift-cards-label">Gift Cards</InputLabel>
      <Select
        labelId="gift-cards-label"
        id="gift-cards"
        label="Gift Cards"
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      >
        {cards.map((c) => (
          <MenuItem style={{ display: "flex" }} key={c.id} value={c.id}>
            <GiftCard card={c} />
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <FormHelperText style={{ color: theme.palette.error.main }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

const ConnectedGiftCardSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftCardSelect);
export default ConnectedGiftCardSelect;
