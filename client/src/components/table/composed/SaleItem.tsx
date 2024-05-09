import { IconButton, TableCell, TableRow } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import { ISale } from "../../../redux/sale/model/interfaces";
import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../../../helpers/reduxToProps";
import * as saleActions from "../../../redux/sale/actions";
import { connect } from "react-redux";

const mapStateToProps = createMapStateToProps<ISale>(
  (state) => state.sale.sales
);
const mapDispatchToProps = createMapDispatchToProps(
  saleActions.boundDeleteData
);
interface IProps {
  sale: ISale;
}
type ISaleTableRow = LinkProps<ISale, typeof saleActions> & IProps;

const SaleItem = ({ boundData, sale }: ISaleTableRow) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center" component="th" scope="row">
        {sale.name}
      </TableCell>
      <TableCell align="center"></TableCell>
      <TableCell align="center"></TableCell>
      <TableCell align="center">
        <IconButton
          // looks like disable, change colors
          // move btn in a model such as table row
          style={{
            backgroundColor: "gray",
            borderRadius: 0,
          }}
          aria-label="delete"
          size="medium"
          onClick={() => boundData(sale.id)}
        >
          <RemoveIcon
            style={{
              color: "white",
              background: "transparent",
              borderRadius: 0,
            }}
            fontSize="inherit"
          />
        </IconButton>
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

const ConnectedSaleItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaleItem);
export default ConnectedSaleItem;
