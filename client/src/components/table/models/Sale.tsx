// future tableRow component

import { useEffect } from "react";

import { connect } from "react-redux";

import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../../../helpers/reduxToProps";
import { ISale } from "../../../redux/sale/model/interfaces";
import * as saleActions from "../../../redux/sale/actions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

const mapStateToProps = createMapStateToProps<ISale>(
  (state) => state.sale.sales
);
const mapDispatchToProps = createMapDispatchToProps(saleActions.boundGetAll);
type SaleProps = LinkProps<ISale, typeof saleActions>;

const Sale = ({ boundData, data }: SaleProps) => {
  useEffect(() => {
    boundData();
  }, [boundData]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Название рассылки</TableCell>
            <TableCell align="center">Дата рассылки</TableCell>
            <TableCell align="center">Кол-во отправленных подарков</TableCell>
            <TableCell align="center">Отмена рассылки</TableCell>
            <TableCell align="center">Редактировать рассылку</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow
              key={d.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {d.name}
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">
                <IconButton
                  style={{ backgroundColor: "gray", borderRadius: 0 }}
                  aria-label="delete"
                  size="medium"
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
              <TableCell align="center"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ConnectedSale = connect(mapStateToProps, mapDispatchToProps)(Sale);
export default ConnectedSale;
