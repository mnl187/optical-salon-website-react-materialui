import React from 'react';
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import {StyledHomePage} from "./HomePageStyles";


export const HomePage = () => {
    return (
        <StyledHomePage>
            <Container>
                <Typography variant="h4">Witamy na stronie Salonu Optycznego!</Typography>
                <p>Firma M' oferuje profesjonalne usługi i renomowane produkty optyczne.</p>
                <p>Skontaktuj się z nami, aby uzyskać więcej informacji.</p>
            </Container>
        </StyledHomePage>
    );
};