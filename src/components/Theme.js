import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            light: '#6f63ff',
            main: '#0036ff',
            dark: '#0008ca',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ffff54',
            main: '#ffde03',
            dark: '#c7ad00',
            contrastText: '#000'
        }
    },
    typography: {
        fontFamily: [
            'rubik'
        ]
    }
})