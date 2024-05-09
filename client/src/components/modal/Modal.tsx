import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import SaleForm from "../form";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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

          transform: "translate(-50%, -50%)",
          position: "fixed",
          top: "90%",
          left: "95%",
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

      <Modal open={open} onClose={handleClose}>
        <SaleForm
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
        />
      </Modal>
    </div>
  );
};

export default BasicModal;
