import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";

export const HomePage = () => {
    return (
        <Box sx={{width: '100vh', bgcolor: '#96C2D9'}}>
            <Container sx={{}}>
                <Typography variant="h4">Witamy na stronie Salonu Optycznego!</Typography>
                <p>Firma M' oferuje profesjonalne usługi i renomowane produkty optyczne.</p>
                <p>Skontaktuj się z nami, aby uzyskać więcej informacji.</p>
            </Container>
        </Box>
    );
};