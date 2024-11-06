import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#141414',
    },
    background: {
        default: '#141414', 
        paper: '#1d1d1d', //for cards
      },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },
    h2: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Roboto", "Arial", sans-serif',
    },

  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          outline: 'none',
          '&:focus': {
            boxShadow: 'none',
            outline: 'none',
          },
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            fontWeight: 'bold',
          },
        },
      },
    },
  },
});

export default theme;
