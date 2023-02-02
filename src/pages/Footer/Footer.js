import React from 'react';
import {Box, Typography} from '@mui/material';
import {styled } from '@mui/material/styles';

const useStyles = styled(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.light,
        padding: theme.spacing(2),
        bottom: 20,
        width: '100%',
        position: 'fixed'
    },
    text: {
        color: theme.palette.primary.contrastText,
        textAlign: 'center'
    }
}));

export const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.text}>Copyright © 2022 Strona WWW</Typography>
        </Box>
    );
};