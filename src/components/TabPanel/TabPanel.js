import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {AboutUs} from "../../pages/AboutUs/AboutUs";
import {Home} from "@mui/icons-material";
import {HomePage} from '../../pages/Home/HomePage'

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const BasicTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="O nas" {...a11yProps(1)} />
                    <Tab label="Usługi" {...a11yProps(2)} />
                    <Tab label="Produkty" {...a11yProps(3)} />
                    <Tab label="Kontakt" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel data-testid="Home"  value={value} index={0}>
                <HomePage/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AboutUs/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Usługi
            </TabPanel>
            <TabPanel value={value} index={3}>
                Produkty
            </TabPanel>
            <TabPanel value={value} index={4}>
                Kontakt
            </TabPanel>
        </Box>
    );
}