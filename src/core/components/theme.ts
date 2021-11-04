import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Palette {
    lightBackground: Palette["primary"];
  }
  interface PaletteOptions {
    lightBackground: PaletteOptions["primary"];
  }

  // interface PaletteColor {
  //   darker?: string;
  // }
  // interface SimplePaletteColorOptions {
  //   darker?: string;
  // }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#13AA52",
    },
    secondary: {
      main: "#16C172",
    },
    lightBackground: {
      main: "#C7FFE5"
    }
  },
});
