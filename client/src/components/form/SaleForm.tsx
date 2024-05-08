import { Formik, Form } from "formik";
import * as yup from "yup";
import { FormikTextField } from "./solid/FormikTextField";
import GiftCardSelect from "./composed/GiftCardSelect";
import { Button } from "@mui/material";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  giftCard: yup.number().required(),
  numberOfGifts: yup.number().positive().required(),
  daysToClaim: yup.number().positive().required(),
  description: yup.string().max(500).required(),
  "card-numbers": yup
    .string()
    .matches(/^[0-9,]+$/, "Card numbers should only contain numbers and commas")
    .max(5000)
    .required(),
});

const SaleForm = () => {
  return (
    <Formik
      initialValues={{
        giftCard: "",
        name: "",
        amount: 0,
        daysToClaim: 0,
        description: "",
        "card-numbers": "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values));
        // onSubmit(values);
        setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <FormikTextField id="name" label="Name" />
          <GiftCardSelect id="giftCard" label="Gift Card" />
          <FormikTextField
            id="numberOfGifts"
            label="Number of Gifts"
            type="number"
          />
          <FormikTextField
            id="daysToClaim"
            label="Days to Claim"
            type="number"
          />
          <FormikTextField
            id="description"
            label="Description"
            multiline
            minRows={2}
            maxRows={6}
          />
          <FormikTextField
            id="card-numbers"
            label="Card Numbers"
            multiline
            minRows={2}
            maxRows={6}
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SaleForm;
