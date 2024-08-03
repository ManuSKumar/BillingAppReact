// styles.ts
import { createUseStyles } from "react-jss";
import { Theme } from "../../theme";

const useStyles = (theme: Theme) =>
  createUseStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.background.paper,
    },
    loginCard: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "16px",
    },
  });

export default useStyles;
