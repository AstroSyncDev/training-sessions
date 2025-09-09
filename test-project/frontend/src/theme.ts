import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            light: '#ffd769',
            main: '#fcba03',
            dark: '#c99400'
        },
        secondary: {
            light: '#e066ff',
            main: '#339bcbff',
            dark: '#9800bf'
        },
    },
    components: {
        // MuiTextField: {
        //     styleOverrides: {
        //         root: {
        //             backgroundColor: 'red'
        //         }
        //     }
        // },
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            }
        }
    }
}));

export default theme;