import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor } from './colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: neutralColor
        },
        secondary: {
            main: neutralColor,
        },
        text: {
            primary: '#1D164D'
        }
    },
});