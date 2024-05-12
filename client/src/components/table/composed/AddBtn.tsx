import { connect } from "react-redux";
import {
  LinkProps,
  createMapDispatchToProps,
  createMapStateToProps,
} from "../../../helpers/reduxToProps";
import * as saleActions from "../../../redux/sale/actions";
import { ISale } from "../../../redux/sale/model/interfaces";
import Modal from "../../modal";
import AddIcon from "@mui/icons-material/Add";

const mapStateToProps = createMapStateToProps<ISale>(
  (state) => state.sale.sales
);
const mapDispatchToProps = createMapDispatchToProps(saleActions.boundPostData);
type IAddBtn = LinkProps<ISale, typeof saleActions>;

const AddBtn = ({ boundData }: IAddBtn) => {
  return (
    <Modal
      action={boundData}
      aria-label="Add Sale Btn"
      style={{
        backgroundColor: "gray",
        borderRadius: 0,

        transform: "translate(-50%, -50%)",
        position: "fixed",
        top: "90%",
        left: "95%",
      }}
      submitBtnText="submit"
      bodyText="Are you sure you want to create a sale?"
      modalHeader="Create sale"
      icon={
        <AddIcon
          style={{
            color: "white",
            background: "transparent",
            borderRadius: 0,
          }}
          fontSize="inherit"
        />
      }
    />
  );
};

const ConnectedAddBtn = connect(mapStateToProps, mapDispatchToProps)(AddBtn);
export default ConnectedAddBtn;
