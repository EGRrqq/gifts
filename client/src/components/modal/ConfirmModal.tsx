import {
  Button,
  Divider,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useFormikContext } from "formik";
import { useState } from "react";

interface IProps {
  submitBtnText: string;
  bodyHeaderText: string;
}
export const ConfirmModal = ({ submitBtnText, bodyHeaderText }: IProps) => {
  const [open, setOpen] = useState(false);
  const { isValid, submitForm } = useFormikContext();

  const handleOpen = () => {
    if (isValid) setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        {submitBtnText}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="confirm-modal-title"
      >
        <Stack
          component={Paper}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1rem",
            border: "solid",
            minWidth: "30%",
            minHeight: "12%",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Typography
            id="confirm-modal-title"
            style={{ fontWeight: "bold", textAlign: "center" }}
            variant="h5"
            component="h2"
          >
            {bodyHeaderText}
          </Typography>
          <Divider style={{ background: "black" }} />

          <Button variant="contained" onClick={submitForm} type="submit">
            confirm
          </Button>
        </Stack>
      </Modal>
    </>
  );
};
