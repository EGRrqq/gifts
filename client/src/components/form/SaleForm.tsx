import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikTextField from "./solid/FormikTextField";
import GiftCardSelect from "./composed/GiftCardSelect";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  giftCard: yup.number().required("Gift Card is required"),
  numberOfGifts: yup.number().required("Number of Gifts is required"),
  daysToClaim: yup.number().required("Days to Claim is required"),
});

const SaleForm = () => {
  return (
    <Formik
      initialValues={{
        giftCard: "",
        name: "",
        amount: 0,
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
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SaleForm;
