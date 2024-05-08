import { Formik, Form } from "formik";
import * as yup from "yup";
import SaleFormContent from "./composed";
import { TFormContentProps } from "../../types";
import { IGiftCard } from "../../redux/giftCard/model/interfaces";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

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
    [fields.gift_card_id.id]: yup.number().required(),
    [fields.number_of_gifts.id]: yup
      .number()
      .positive()
      .when([fields.gift_card_id.id], (giftCardId, schema) => {
        const card = cards.find((c) => c.id === giftCardId[0]);
        if (card) {
          const { remaining_quantity } = card;

          return schema.max(
            remaining_quantity,
            `Value is greater than the remaining number of gifts ${remaining_quantity}`
          );
        }
      })
      .required(),
    [fields.day_to_claim_gift.id]: yup.number().positive().required(),
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

const SaleForm = () => {
  const cards = useSelector<AppState>(
    (state) => state.giftCard.cards
  ) as IGiftCard[];

  return (
    <Formik
      initialValues={initValues}
      validationSchema={() => validationSchema(cards)}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values));
        // onSubmit(values);
        setSubmitting(false);
      }}
    >
      {() => <SaleFormContent fields={fields} />}
    </Formik>
  );
};

export default SaleForm;
