import { connect } from "react-redux";
import { increment } from "./redux";
import { selectValue } from "./selectors";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import Layout from "./layout";

const mapStateToProps = createStructuredSelector({
  value: selectValue,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onIncrement: increment,
    },
    dispatch
  );

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
