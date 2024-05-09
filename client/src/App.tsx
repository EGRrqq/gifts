import { Box } from "@mui/material";
import Modal from "./components/modal";
import Sale from "./components/table/Sale";

const App = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100dvh" }}>
      <Modal />
      <Sale />
    </Box>
  );
};

export default App;
