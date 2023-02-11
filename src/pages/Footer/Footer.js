import React from 'react';
import {Typography} from '@mui/material';
import {StyledFooter, StyledContainer} from './StyledFooter';

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledContainer>
                    <Typography>Copyright © 2023 Strona WWW Salonu Optycznego</Typography>
            </StyledContainer>
        </StyledFooter>

    );
};