import { Form } from "formik";
import { FormikTextField } from "../solid";
import { ConnectedGiftCardSelect as GiftCardSelect } from "./GiftCardSelect";
import { Button } from "@mui/material";
import { TFormContentProps } from "../../../types";

interface IProps {
  fields: TFormContentProps;
}

export const SaleFormContent = ({ fields }: IProps) => {
  const {
    name,
    gift_card_id,
    number_of_gifts,
    day_to_claim_gift,
    description,
    card_numbers,
  } = fields;

  return (
    <Form>
      <FormikTextField id={name.id} label={name.label} />
      <GiftCardSelect id={gift_card_id.id} label={gift_card_id.label} />
      <FormikTextField
        id={number_of_gifts.id}
        label={number_of_gifts.label}
        type="number"
      />
      <FormikTextField
        id={day_to_claim_gift.id}
        label={day_to_claim_gift.label}
        type="number"
      />
      <FormikTextField
        id={description.id}
        label={description.label}
        multiline
        minRows={2}
        maxRows={6}
      />
      <FormikTextField
        id={card_numbers.id}
        label={card_numbers.label}
        multiline
        minRows={2}
        maxRows={6}
      />

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Form>
  );
};
