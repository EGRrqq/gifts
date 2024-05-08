import { Button } from "@mui/material";
import GiftCardSelect from "./GiftCardSelect";
import FormikTextField from "../solid/FormikTextField";

const FormContent = () => {
  return (
    <>
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
    </>
  );
};

export default FormContent;
