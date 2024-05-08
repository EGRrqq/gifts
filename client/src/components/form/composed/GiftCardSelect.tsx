import { useEffect } from "react";

import { connect } from "react-redux";

import { boundRequestCards } from "../../../redux/giftCard/actions";
import { GiftCard } from "../models/GiftCard";
import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../../../helpers/reduxToProps";
import { IFormikProps } from "../../../types";
import { FormikSelect } from "../solid/FormikSelect";
import { MenuItem } from "@mui/material";
import { IGiftCard } from "../../../redux/giftCard/model/interfaces";

const mapStateToProps = createMapStateToProps<IGiftCard>(
  (state) => state.giftCard.cards
);
const mapDispatchToProps = createMapDispatchToProps(boundRequestCards);
type GiftCard = LinkProps<IGiftCard, typeof boundRequestCards> & IFormikProps;

const GiftCardSelect = ({ boundRequestData, data, id, label }: GiftCard) => {
  useEffect(() => {
    boundRequestData();
  }, [boundRequestData]);

  return (
    <FormikSelect
      id={id}
      label={label}
      data={data.map((c) => (
        <MenuItem style={{ display: "flex" }} key={c.id} value={c.id}>
          <GiftCard card={c} />
        </MenuItem>
      ))}
    />
  );
};

const ConnectedGiftCardSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftCardSelect);
export default ConnectedGiftCardSelect;
