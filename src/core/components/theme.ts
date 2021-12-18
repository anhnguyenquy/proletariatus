import { Color } from '@mui/material'
import { createTheme } from '@mui/material/styles'
declare module '@mui/material/styles' {
  interface Palette {
    lightBackgroundPrimary: Palette['primary']
    red: Palette['primary']
    // @ts-ignore 
    grey: Palette['primary']
  }
  interface PaletteOptions {
    lightBackgroundPrimary: PaletteOptions['primary']
    red: PaletteOptions['primary']
    // @ts-ignore 
    grey: PaletteOptions['primary']
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
      main: '#13AA52',
    },
    secondary: {
      main: '#16C172',
    },
    lightBackgroundPrimary: {
      main: '#C7FFE5',
    },
    red: {
      main: '#F85149',
    },
    grey: {
      // @ts-ignore 
      main: '#888089'
    }
  },
})
