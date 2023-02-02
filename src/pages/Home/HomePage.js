import React from 'react';
import {Container, Typography} from "@mui/material";

export const HomePage = () => {
    return (
        <Container>
            <Typography variant="h4">Witamy na stronie Salonu Optycznego!</Typography>
            <p>Firma M' oferuje profesjonalne usługi i renomowane produkty optyczne.</p>
            <p>Skontaktuj się z nami, aby uzyskać więcej informacji.</p>
        </Container>
    );
};