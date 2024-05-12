import EditIcon from "@mui/icons-material/Edit";
import { useTheme } from "@mui/material/styles";
import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../../../helpers/reduxToProps";
import { ISale } from "../../../redux/sale/model/interfaces";
import * as saleActions from "../../../redux/sale/actions";
import { connect } from "react-redux";
import Modal from "../../modal";

const mapStateToProps = createMapStateToProps<ISale>(
  (state) => state.sale.sales
);
const mapDispatchToProps = createMapDispatchToProps(
  saleActions.boundUpdateData
);
interface IProps {
  sale: ISale;
}
type IRemoveBtn = LinkProps<ISale, typeof saleActions> & IProps;

const EditBtn = ({ boundData, sale }: IRemoveBtn) => {
  const { palette } = useTheme();

  return (
    <Modal
      action={boundData}
      aria-label="Edit Sale Btn"
      style={{
        background: palette.secondary.light,
        borderRadius: 0,
      }}
      icon={
        <EditIcon
          style={{
            color: "white",
            borderRadius: 0,
          }}
          fontSize="inherit"
        />
      }
      sale={sale}
      submitBtnText="Save"
      bodyText="Are you sure you want to edit the sale"
      modalHeader="Edit sale"
    />
  );
};

const ConnectedEditBtn = connect(mapStateToProps, mapDispatchToProps)(EditBtn);
export default ConnectedEditBtn;
