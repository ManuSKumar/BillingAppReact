// styles.ts
import { createUseStyles } from "react-jss";
import { Theme } from "../../theme";
import billingLogin from "../../assets/billingLogin.svg";

const useStyles = (theme: Theme) =>
  createUseStyles({
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    navBar: {
      height: 55,
      minHeight: 55,
      background: "#9c27b0",
    },
    main: {
      display: "flex",
      flexDirection: "row",
      height: "100%",
    },
    sidebar: {
      flex: 1,
      height: "100%",
      maxWidth: 300,
      boxShadow: theme.shadows[4],
    },
    workArea: {
      flex: 3,
      height: "100%",
    },
  });

export default useStyles;
