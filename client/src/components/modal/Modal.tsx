import Modal from "@mui/material/Modal";
import { ReactNode, useState } from "react";
import SaleForm from "../form";
import { IconButton } from "@mui/material";
import { ISale } from "../../redux/sale/model/interfaces";

interface IProps {
  icon: ReactNode;
  "aria-label": string;
  style?: React.CSSProperties;
  sale?: ISale;
  action: (data: ISale) => void;

  submitBtnText: string;
  bodyText: string;
}

const BasicModal = ({
  sale,
  icon,
  style,
  "aria-label": ariaLabel,
  action,
  bodyText,
  submitBtnText,
}: IProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <article>
      <IconButton
        // looks like disable, change colors
        // move btn in a model such as table row
        style={style}
        aria-label={ariaLabel}
        size="medium"
        onClick={handleOpen}
      >
        {icon}
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <SaleForm
          action={action}
          handleClose={handleClose}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1rem",
            border: "solid",
            minWidth: "50%",
          }}
          sale={sale}
          bodyText={bodyText}
          submitBtnText={submitBtnText}
        />
      </Modal>
    </article>
  );
};

export default BasicModal;
