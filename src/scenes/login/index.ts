import { connect } from "react-redux";
import { login } from "../auth/redux";

import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import Layout from "./layout";

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      login,
    },
    dispatch
  );

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
