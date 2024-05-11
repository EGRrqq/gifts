import { ReactNode, useEffect, useState } from "react";

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
import { Button, Input } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const mapStateToProps = createMapStateToProps<ISale>(
  (state) => state.sale.sales
);
const mapDispatchToProps = createMapDispatchToProps(saleActions.boundGetAll);
type SaleProps = LinkProps<ISale, typeof saleActions>;

const Sale = ({ boundData, data }: SaleProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [sortFlag, setSortFlag] = useState<boolean | undefined>(undefined);
  const [sortValue, setSortValue] = useState<"ASC" | "DESC" | "">("");
  const [hoverFlag, setHoverFlag] = useState<boolean>(false);

  useEffect(() => {
    boundData(searchValue, sortValue);
  }, [boundData, searchValue, sortValue]);

  function handleClick() {
    const newSortFlag = sortFlag === undefined ? true : !sortFlag;
    setSortFlag(newSortFlag);
    newSortFlag === true ? setSortValue("ASC") : setSortValue("DESC");
  }
  function handleArrowIcon(hoverIcon?: ReactNode): ReactNode {
    let endIcon: ReactNode = hoverIcon || <></>;

    if (hoverFlag) endIcon = <ArrowUpwardIcon sx={{ opacity: 0.5 }} />;
    if (sortFlag === true) endIcon = <ArrowUpwardIcon />;
    if (sortFlag === false) endIcon = <ArrowDownwardIcon />;

    return endIcon;
  }
  function handleMouseOver() {
    if (sortFlag !== undefined) return;
    setHoverFlag(true);
  }
  function handleMouseOut() {
    if (sortFlag !== undefined) return;
    setHoverFlag(false);
  }

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
                value={searchValue}
                onInput={(e) => setSearchValue(e.target.value)}
              />
            </TableCell>

            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center">
              <Button
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={handleClick}
                endIcon={handleArrowIcon()}
              >
                Название рассылки
              </Button>
            </TableCell>
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
