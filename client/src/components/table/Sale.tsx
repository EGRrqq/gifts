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
import { Button, Input, TableFooter, TablePagination } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

const mapStateToProps = createMapStateToProps((state) => {
  return { sales: state.sale.sales, total: state.sale.totalAmount };
});
const mapDispatchToProps = createMapDispatchToProps(saleActions.boundGetAll);
type SaleProps = LinkProps<{ rows: ISale; total: number }, typeof saleActions>;
const ALL = 999999;

const Sale = ({ boundData, data }: SaleProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [sortFlag, setSortFlag] = useState<boolean | undefined>(undefined);
  const [sortValue, setSortValue] = useState<"ASC" | "DESC" | "">("");
  const [hoverFlag, setHoverFlag] = useState<boolean>(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(ALL);

  useEffect(() => {
    boundData(searchValue, sortValue, page + 1, rowsPerPage);
  }, [boundData, searchValue, sortValue, page, rowsPerPage]);

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

  function handleChangePage(
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ overflowX: "initial" }}>
      <Table
        sx={{ minWidth: 650, outline: "solid 0.1rem" }}
        aria-label="sale table"
      >
        <TableHead
          sx={{
            position: "sticky",
            top: 1,
            zIndex: 1,
            "& .MuiTableCell-root": { backgroundColor: "background.paper" },
            th: { borderBottom: 0 },
            outline: "solid 0.1rem",
          }}
        >
          <TableRow sx={{ outline: "solid 0.05rem" }}>
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

          <TableRow sx={{ outline: "solid 0.05rem" }}>
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

        <TableBody sx={{ outline: "solid 0.05rem" }}>
          {data.sales.map((d) => (
            <SaleItem key={d.id} sale={d} />
          ))}
        </TableBody>

        <TableFooter sx={{ outline: "solid 0.05rem" }}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, { label: "All", value: ALL }]}
              count={data.total}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

const ConnectedSale = connect(mapStateToProps, mapDispatchToProps)(Sale);
export default ConnectedSale;
