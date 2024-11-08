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
            '&:active': {
                fontWeight: 'bold',
                outline: 'none',
                boxShadow: 'none',
            },
            '&:focus': {
                fontWeight: 'bold',
                outline: 'none',
                boxShadow: 'none',
            },
            '&:hover': {
                fontWeight: 'bold',
                outline: 'none',
                boxShadow: 'none',
            },
            '&:focus-visible': {
                outline: 'none',
                boxShadow: 'none',
            },
        },
      },
    },
  },
});

export default theme;
