import { Formik } from "formik";
import * as yup from "yup";
import SaleFormContent from "./composed";
import { TFormContentProps } from "../../types";
import { IGiftCard } from "../../redux/giftCard/model/interfaces";
import { connect, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { dateDiff, findById } from "../../helpers";
import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../../helpers/reduxToProps";
import * as saleActions from "../../redux/sale/actions";
import { ISale } from "../../redux/sale/model/interfaces";
import { Paper } from "@mui/material";

const fields: TFormContentProps = {
  name: { id: "name", label: "Name" },
  gift_card_id: { id: "gift_card_id", label: "Gift Card" },
  number_of_gifts: { id: "number_of_gifts", label: "Number of gifts" },
  day_to_claim_gift: { id: "day_to_claim_gift", label: "Days to claim" },
  description: { id: "description", label: "Description" },
  card_numbers: { id: "card_numbers", label: "Card Numbers" },
};

const validationSchema = (cards: IGiftCard[]) =>
  yup.object().shape({
    [fields.name.id]: yup.string().required(),
    [fields.gift_card_id.id]: yup
      .number()
      .test("exist", "Card does not exist", function (id) {
        const card = findById(cards, id);
        return Boolean(card);
      })
      .required(),
    [fields.number_of_gifts.id]: yup
      .number()
      .positive()
      .when([fields.gift_card_id.id], (giftCardId, schema) => {
        const card = findById(cards, giftCardId[0]);
        if (card) {
          const { remaining_quantity } = card;

          return schema.max(
            remaining_quantity,
            `Value is greater than the remaining number of gifts ${remaining_quantity}`
          );
        }
      })
      .required(),
    [fields.day_to_claim_gift.id]: yup
      .number()
      .positive()
      .when([fields.gift_card_id.id], (giftCardId, schema) => {
        const card = findById(cards, giftCardId[0]);
        if (card) {
          const { expiration_date } = card;
          const daysDiff = dateDiff(
            new Date(expiration_date).getTime(),
            Date.now()
          );
          const maxDays = daysDiff - 2;

          return schema.max(
            maxDays,
            `The value is greater than at least two days before the expiration_date ${maxDays}`
          );
        }
      })
      .required(),
    [fields.description.id]: yup.string().max(500).required(),
    [fields.card_numbers.id]: yup
      .string()
      .matches(
        /^[0-9,]+$/,
        "Card numbers should only contain numbers and commas"
      )
      .max(5000)
      .required(),
  });

const initValues = {
  [fields.name.id]: "",
  [fields.gift_card_id.id]: 1,
  [fields.number_of_gifts.id]: 1,
  [fields.day_to_claim_gift.id]: 1,
  [fields.description.id]: "",
  [fields.card_numbers.id]: "",
};

const mapStateToProps = createMapStateToProps<ISale>(
  (state) => state.sale.sales
);
const mapDispatchToProps = createMapDispatchToProps(saleActions.boundPostData);
interface IProps {
  handleClose: () => void;
  style?: React.CSSProperties;
}
type ISaleForm = LinkProps<ISale, typeof saleActions> & IProps;

const SaleForm = ({ boundData, handleClose, style }: ISaleForm) => {
  const cards = useSelector<AppState>(
    (state) => state.giftCard.cards
  ) as IGiftCard[];

  return (
    <Formik
      initialValues={initValues}
      validationSchema={() => validationSchema(cards)}
      onSubmit={(values: ISale, { setSubmitting, resetForm }) => {
        boundData(values);
        handleClose();
        resetForm();
      }}
    >
      {() => (
        <Paper style={style}>
          <SaleFormContent fields={fields} />
        </Paper>
      )}
    </Formik>
  );
};

const ConnectedSaleForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaleForm);
export default ConnectedSaleForm;
