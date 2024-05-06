import { useEffect } from "react";

import { connect } from "react-redux";

import { IGiftCard } from "../redux/giftCard/model/types";
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
import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../helpers/reduxToProps";

interface Props {
  value: string;
  name: string;
  onChange: SelectInputProps<string>["onChange"];
  onBlur: SelectInputProps<string>["onBlur"];
  error: SelectInputProps<string>["error"];
  helperText?: boolean | string;
}

const mapStateToProps = createMapStateToProps<IGiftCard>(
  (state) => state.giftCard.cards
);
const mapDispatchToProps = createMapDispatchToProps(boundRequestCards);
type GiftCard = LinkProps<IGiftCard, typeof boundRequestCards> & Props;

const GiftCardSelect = ({
  boundRequestData,
  data,
  value,
  name,
  onChange,
  onBlur,
  error,
  helperText,
}: GiftCard) => {
  const theme = useTheme();

  useEffect(() => {
    boundRequestData();
  }, [boundRequestData]);

  return (
    <FormControl fullWidth>
      <InputLabel id="gift-cards-label">Gift Cards</InputLabel>
      <Select
        labelId="gift-cards-label"
        id={name}
        label="Gift Cards"
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      >
        {data.map((c) => (
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
