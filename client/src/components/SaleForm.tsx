import GiftCardSelect from "./GiftCardSelect";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  giftCard: yup.number().required("Please select a gift card"),
});

const SaleForm = () => {
  const formik = useFormik({
    initialValues: {
      giftCard: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      alert(JSON.stringify(values));
      // onSubmit(values);
      setSubmitting(false);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <GiftCardSelect
          name="giftCard"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.giftCard}
          error={formik.touched.giftCard && Boolean(formik.errors.giftCard)}
          helperText={formik.touched.giftCard && formik.errors.giftCard}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SaleForm;
