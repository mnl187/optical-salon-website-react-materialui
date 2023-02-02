import './App.css';
import {BasicTabs} from "./components/TabPanel/TabPanel";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {blueGrey} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[500],
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
