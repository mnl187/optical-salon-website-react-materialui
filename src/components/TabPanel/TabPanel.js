    import * as React from 'react';
    import PropTypes from 'prop-types';
    import Tabs from '@mui/material/Tabs';
    import Tab from '@mui/material/Tab';
    import Typography from '@mui/material/Typography';
    import Box from '@mui/material/Box';
    import {AboutUs} from "../../pages/AboutUs/AboutUs";
    import {HomePage} from '../../pages/Home/HomePage'
    import {Services} from "../../pages/Services/Services";
    import Icon from "@mui/material/Icon";
    import {Footer} from "../../pages/Footer/Footer";

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
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    bgcolor: '#378095'
                }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab
                            label="Home"
                            icon={<Icon>home</Icon>}
                            {...a11yProps(0)}
                        />
                        <Tab
                            label="O nas"
                            icon={<Icon>group</Icon>}
                            {...a11yProps(1)}
                        />
                        <Tab
                            label="Usługi"
                            icon={<Icon>miscellaneous_services_icon</Icon>}
                            {...a11yProps(2)}
                        />
                        <Tab
                            label="Produkty"
                            icon={<Icon>shopping_cart</Icon>}
                            {...a11yProps(3)}
                        />
                        <Tab
                            label="Kontakt"
                            icon={<Icon>contact_mail</Icon>}
                            {...a11yProps(4)}
                        />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <HomePage/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AboutUs/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Services/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Produkty
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Kontakt
                </TabPanel>
                <Footer />
            </Box>
        );
    }