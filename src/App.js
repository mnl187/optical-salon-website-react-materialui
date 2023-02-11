import './App.css';
import {BasicTabs} from "./components/TabPanel/TabPanel";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import * as React from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: '#96C2D9',
            secondary: '#3E7F9F'
        }
    }
});

export const App = () => {
    return <ThemeProvider theme={theme}>
        <div className="App">
            <BasicTabs/>
        </div>
    </ThemeProvider>;
}
