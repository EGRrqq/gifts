import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../../../helpers/reduxToProps";
import { ISale } from "../../../redux/sale/model/interfaces";
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
type IRemoveBtn = LinkProps<ISale, typeof saleActions> & IProps;

const RemoveBtn = ({ boundData, sale }: IRemoveBtn) => {
  return (
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
  );
};

const ConnectedRemoveBtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveBtn);
export default ConnectedRemoveBtn;
