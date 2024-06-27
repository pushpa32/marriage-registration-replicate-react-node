import React, { useState } from 'react'
import Form from './pages/Form';
import { Box, Container } from '@mui/material';
import Header from './Component/Header';
import Footer from './Component/Footer';

const Index = () => {

    return (
        <div style={{
            backgroundColor: "#cfe8fc"
        }}>
            <Header />
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#cfe8fc', padding: "30px" }} >
                    <Form />
                </Box>
            </Container>
            <Footer />
        </div>
    );
}

export default Index