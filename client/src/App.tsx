import { Box } from "@mui/material";
import Sale from "./components/table/Sale";
import { AddBtn } from "./components/table/composed";

const App = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100dvh" }}>
      <AddBtn />
      <Sale />
    </Box>
  );
};

export default App;
