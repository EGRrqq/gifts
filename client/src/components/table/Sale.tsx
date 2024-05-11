// future tableRow component

import { useEffect, useState } from "react";

import { connect } from "react-redux";

import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../../helpers/reduxToProps";
import { ISale } from "../../redux/sale/model/interfaces";
import * as saleActions from "../../redux/sale/actions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SaleItem } from "./composed";
import { Input } from "@mui/material";

const mapStateToProps = createMapStateToProps<ISale>(
  (state) => state.sale.sales
);
const mapDispatchToProps = createMapDispatchToProps(saleActions.boundGetAll);
type SaleProps = LinkProps<ISale, typeof saleActions>;

const Sale = ({ boundData, data }: SaleProps) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    boundData(value);
  }, [boundData, value]);

  return (
    <TableContainer component={Paper} sx={{ overflowX: "initial" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          sx={{
            position: "sticky",
            top: 1,
            zIndex: 1,
            "& .MuiTableCell-root": { backgroundColor: "background.paper" },
            th: { borderBottom: 0 },
            outline: "solid",
          }}
        >
          <TableRow sx={{ outline: "solid" }}>
            <TableCell align="center">
              <Input
                autoFocus
                fullWidth
                placeholder="search"
                value={value}
                onInput={(e) => setValue(e.target.value)}
              />
            </TableCell>

            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center">Название рассылки</TableCell>
            <TableCell align="center">Дата рассылки</TableCell>
            <TableCell align="center">Кол-во отправленных подарков</TableCell>
            <TableCell align="center">Отмена рассылки</TableCell>
            <TableCell align="center">Редактировать рассылку</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ outline: "solid" }}>
          {data.map((d) => (
            <SaleItem key={d.id} sale={d} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ConnectedSale = connect(mapStateToProps, mapDispatchToProps)(Sale);
export default ConnectedSale;
