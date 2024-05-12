import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
  const { palette } = useTheme();

  return (
    <IconButton
      style={{
        backgroundColor: palette.error.light,
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
