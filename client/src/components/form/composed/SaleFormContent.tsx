import { Form } from "formik";
import { FormikTextField } from "../solid";
import { ConnectedGiftCardSelect as GiftCardSelect } from "./GiftCardSelect";
import { TFormContentProps } from "../../../types";
import { ConfirmModal } from "../../modal/ConfirmModal";

interface IProps {
  fields: TFormContentProps;
  submitBtnText: string;
  bodyText: string;
}

export const SaleFormContent = ({
  fields,
  submitBtnText,
  bodyText,
}: IProps) => {
  const {
    name,
    gift_card_id,
    number_of_gifts,
    day_to_claim_gift,
    description,
    card_numbers,
  } = fields;

  return (
    <Form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <FormikTextField id={name.id} label={name.label} autoFocus />
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

      <ConfirmModal submitBtnText={submitBtnText} bodyHeaderText={bodyText} />
    </Form>
  );
};
