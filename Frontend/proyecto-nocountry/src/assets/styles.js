import { Button } from '@mui/material';
import {
    styled,
    createTheme,    
} from '@mui/material/styles';


export const theme = createTheme({
    palette: {
        primary: {
            light: "#E2E5C3",
            main: "#98B419",
            dark: "#BDCC6E"
        },
        secondary:{
            main: "#F8EFC9"
        },
        background: {
            main: "#F5F2EE"
        }

    },
    typography: {
        fontFamily: 'Roboto'
    }
});


export const MyButton = styled(Button)({
    borderRadius: '1em',
    border: `0.2em solid ${theme.palette.primary.dark}`,
    backgroundColor: theme.palette.primary.light,
    color: '#000',
    paddingTop: "0.5em",
    width: "fit-content",
    fontSize: "1.2em",

});