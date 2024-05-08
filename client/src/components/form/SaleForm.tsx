import { Formik, Form } from "formik";
import * as yup from "yup";
import SaleFormContent from "./composed";
import { TFormContentProps } from "../../types";

const fields: TFormContentProps = {
  name: { id: "name", label: "Name" },
  gift_card_id: { id: "gift_card_id", label: "Gift Card" },
  number_of_gifts: { id: "number_of_gifts", label: "Number of gifts" },
  day_to_claim_gift: { id: "day_to_claim_gift", label: "Days to claim" },
  description: { id: "description", label: "Description" },
  card_numbers: { id: "card_numbers", label: "Card Numbers" },
};

const validationSchema = yup.object().shape({
  [fields.name.id]: yup.string().required(),
  [fields.gift_card_id.id]: yup.number().required(),
  [fields.number_of_gifts.id]: yup.number().positive().required(),
  [fields.day_to_claim_gift.id]: yup.number().positive().required(),
  [fields.description.id]: yup.string().max(500).required(),
  [fields.card_numbers.id]: yup
    .string()
    .matches(/^[0-9,]+$/, "Card numbers should only contain numbers and commas")
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
  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
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
