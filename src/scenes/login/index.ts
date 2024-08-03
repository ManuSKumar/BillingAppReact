import { connect } from "react-redux";
import { login, loadData } from "../auth/redux";

import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import Layout from "./layout";
import { selectIsAuthenticated } from "../auth/selectors";

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      login,
      loadData,
    },
    dispatch
  );

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
