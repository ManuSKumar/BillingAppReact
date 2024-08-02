import { connect } from "react-redux";
import { login, logout } from "./redux";
import { selectIsAuthenticated } from "./selectors";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import Layout from "./layout";

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
});
/* 
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onIncrement: increment,
    },
    dispatch
  ); */

// Connect component to Redux
export default connect(mapStateToProps)(Layout);
