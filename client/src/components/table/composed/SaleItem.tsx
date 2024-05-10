import { TableCell, TableRow } from "@mui/material";
import RemoveBtn from "./RemoveBtn";
import EditBtn from "./EditBtn";
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
        <EditBtn sale={sale} />
      </TableCell>
    </TableRow>
  );
};

export default SaleItem;
