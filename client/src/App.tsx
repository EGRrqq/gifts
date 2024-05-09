import { Box } from "@mui/material";
import SaleForm from "./components/form";
import Modal from "./components/modal";
import Sale from "./components/table/Sale";

const App = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100dvh" }}>
      {/* <SaleForm /> */}
      <Modal />
      <Sale />
    </Box>
  );
};

export default App;
