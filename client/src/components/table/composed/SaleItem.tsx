import { IconButton, TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import RemoveBtn from "./RemoveBtn";
import { ISale } from "../../../redux/sale/model/interfaces";

interface IProps {
  sale: ISale;
}

const SaleItem = ({ sale }: IProps) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center" component="th" scope="row">
        {sale.name}
      </TableCell>
      <TableCell align="center"></TableCell>
      <TableCell align="center"></TableCell>
      <TableCell align="center">
        <RemoveBtn sale={sale} />
      </TableCell>
      <TableCell align="center">
        <IconButton
          style={{ backgroundColor: "gray", borderRadius: 0 }}
          aria-label="delete"
          size="medium"
        >
          <EditIcon
            style={{
              color: "white",
              background: "transparent",
              borderRadius: 0,
            }}
            fontSize="inherit"
          />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default SaleItem;
