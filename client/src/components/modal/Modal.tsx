import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import SaleForm from "../form";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        // looks like disable, change colors
        // move btn in a model such as table row
        style={{
          backgroundColor: "gray",
          borderRadius: 0,
        }}
        aria-label="delete"
        size="medium"
        onClick={handleOpen}
      >
        <AddIcon
          style={{
            color: "white",
            background: "transparent",
            borderRadius: 0,
          }}
          fontSize="inherit"
        />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SaleForm />
      </Modal>
    </div>
  );
};

export default BasicModal;
