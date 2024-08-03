// styles.ts
import { createUseStyles } from "react-jss";
import { Theme } from "../../theme";
import billingLogin from "../../assets/billingLogin.svg";

const useStyles = (theme: Theme) =>
  createUseStyles({
    container: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flex: 1,
    },
    left: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 24,
      // boxShadow: theme.shadows[4],
      height: "100%",
    },
    right: {
      height: "60%",
      backgroundImage: `url(${billingLogin})`,
      backgroundSize: "contain", // Adjust the size of the background image
      backgroundPosition: "center", // Center the image
      backgroundRepeat: "no-repeat", // Prevent the image from repeating
      display: "flex",
      flex: 1,
    },
    loginCard: {
      maxWidth: 350,
      background: "#feecff",
      border: "1px solid #ccc",
      boxShadow: theme.shadows[1],
      padding: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "16px",
    },
    loginButton: {
      background: "#9c27b0",
    },
    textField: {
      background: "transparent",
      ":focus": {
        background: "transparent",
      },
      ":hover": {
        background: "transparent",
      },
    },
  });

export default useStyles;
