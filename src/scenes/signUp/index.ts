import { connect } from "react-redux";
import { signUp } from "../auth/redux";

import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import Layout from "./layout";

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      signUp,
    },
    dispatch
  );

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
