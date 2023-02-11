import React from 'react';
import {Typography} from '@mui/material';
import {FooterStyles, StyledContainer} from './FooterStyles';

export const Footer = () => {
    return (
        <FooterStyles>
            <StyledContainer>
                    <Typography>Copyright © 2023 Strona WWW Salonu Optycznego</Typography>
            </StyledContainer>
        </FooterStyles>

    );
};