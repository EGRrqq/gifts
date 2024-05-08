import { Form } from "formik";
import { FormikTextField } from "../solid";
import { ConnectedGiftCardSelect as GiftCardSelect } from "./GiftCardSelect";
import { Button } from "@mui/material";

export const SaleFormContent = () => {
  return (
    <>
      <Form>
        <FormikTextField id="name" label="Name" />
        <GiftCardSelect id="giftCard" label="Gift Card" />
        <FormikTextField
          id="numberOfGifts"
          label="Number of Gifts"
          type="number"
        />
        <FormikTextField id="daysToClaim" label="Days to Claim" type="number" />
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
    </>
  );
};
