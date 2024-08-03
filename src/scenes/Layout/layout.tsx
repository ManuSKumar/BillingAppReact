import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./header";
import useStyles from "./styles";
import SalesInvoices from "../../Sales/layout";
import CreateSalesInvoice from "../../Sales/create";

interface LayoutProps {
  value: number;
  onIncrement: () => void;
}

const Layout: React.FC<LayoutProps> = ({ value, onIncrement }) => {
  const theme = useTheme();
  const classs = useStyles(theme)();

  return (
    <div className={classs.container}>
      <Header />
      <div className={classs.main}>
        <div className={classs.sidebar}></div>
        <div className={classs.workArea}>
          {/*   <SalesInvoices /> */}
          <CreateSalesInvoice />
        </div>
      </div>
    </div>
  );
};

export default Layout;
