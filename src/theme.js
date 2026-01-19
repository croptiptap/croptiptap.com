import { createTheme } from '@mui/material/styles'

const colors = {
  primary: {
    main: '#000',
  },
  secondary: {
    main: '#fff',
  },
  accent: {
    main: '#00ccff',
    hover: '#00b8e6',
  },
  background: {
    dark: '#010609',
    dark2: '#010c11',
    medium: '#041722',
    light: '#032031',
  },
}

const theme = createTheme({
  palette: {
    type: 'light',
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    background: colors.background,
  },
  typography: {
    fontFamily: ['Montserrat Variable', 'sans-serif'].join(','),
  },
  components: {
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          padding: '8px 16px',
          borderRadius: 6,
          textTransform: 'none',
          fontSize: '1rem',
        },
      },
    },
  },
})

export default theme
