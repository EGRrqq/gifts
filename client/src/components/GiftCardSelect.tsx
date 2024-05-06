import { useEffect } from "react";

import { connect } from "react-redux";

import { IGiftCard } from "../redux/giftCard/model/types";
import { boundRequestCards } from "../redux/giftCard/actions";
import GiftCard from "./GiftCard";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../helpers/reduxToProps";
import SaleFormHelperText from "./SaleFormHelperText";
import { IFormikProps } from "../types";
import { useField } from "formik";

const mapStateToProps = createMapStateToProps<IGiftCard>(
  (state) => state.giftCard.cards
);
const mapDispatchToProps = createMapDispatchToProps(boundRequestCards);
type GiftCard = LinkProps<IGiftCard, typeof boundRequestCards> & IFormikProps;

const GiftCardSelect = ({
  boundRequestData,
  data,
  id,
  label,
  ...props
}: GiftCard) => {
  const [field, meta] = useField(id);

  useEffect(() => {
    boundRequestData();
  }, [boundRequestData]);

  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        label={label}
        error={meta.touched && Boolean(meta.error)}
        {...field}
        {...props}
      >
        {data.map((c) => (
          <MenuItem style={{ display: "flex" }} key={c.id} value={c.id}>
            <GiftCard card={c} />
          </MenuItem>
        ))}
      </Select>
      <SaleFormHelperText helperText={meta.touched && meta.error} />
    </FormControl>
  );
};

const ConnectedGiftCardSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftCardSelect);
export default ConnectedGiftCardSelect;
