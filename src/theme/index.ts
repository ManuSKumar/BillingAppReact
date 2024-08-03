import { createTheme, Theme } from "@mui/material/styles";

const dark = createTheme({
  palette: {
    mode: "dark",
  },
});

const light = createTheme({
  palette: {
    mode: "light",
  },
});

export { dark, light };
export type { Theme };
