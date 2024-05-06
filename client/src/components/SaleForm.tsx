import { Formik, Form } from "formik";
import * as yup from "yup";
import FormikTextField from "./FormikTextField";
import GiftCardSelect from "./GiftCardSelect";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  giftCard: yup.number().required("Gift Card is required"),
  amount: yup.number().required("Amount is required"),
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
          <FormikTextField id="amount" label="Amount" type="number" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SaleForm;
