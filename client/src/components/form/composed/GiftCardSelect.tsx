import { useEffect } from "react";

import { connect } from "react-redux";

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
import * as giftCardActions from "../../../redux/giftCard/actions";

const mapStateToProps = createMapStateToProps<IGiftCard>(
  (state) => state.giftCard.cards
);
const mapDispatchToProps = createMapDispatchToProps(
  giftCardActions.boundGetAll
);
type GiftCard = LinkProps<IGiftCard, typeof giftCardActions.boundGetAll> &
  IFormikProps;

const GiftCardSelect = ({ boundData, data, id, label }: GiftCard) => {
  useEffect(() => {
    boundData();
  }, [boundData]);

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

export const ConnectedGiftCardSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftCardSelect);
