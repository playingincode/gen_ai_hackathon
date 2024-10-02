import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';

function LearningPath() {
    const navigate = useNavigate();
    const cards = [
        { id: 1, label: 'English', path: '/component1', color: 'linear-gradient(145deg, rgba(3, 169, 244, 0.7), rgba(0, 188, 212, 0.7))' },
        { id: 2, label: '+', path: '/component6', color: 'linear-gradient(145deg, rgba(3, 169, 244, 0.7), rgba(0, 188, 212, 0.7))' }
    ];

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100%',
                backgroundColor: '#f5f5f5',
                color: '#333',
                padding:`30px`
            }}>
                <Box sx={{ flexGrow: 1, width: '85%', p: 3 }}>
                    <Grid container spacing={6} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {cards.map((card) => (
                            <Grid item xs={12} sm={6} md={4} key={card.id}>
                                <Card sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 250,
                                    background: card.color,  // Translucent gradient background
                                    borderRadius: '16px',
                                    color: '#ffffff',  // White text for better readability
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 0 30px 10px rgba(0,0,0,0.3)',
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
                                    },
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
                                }}>
                                    <CardActionArea onClick={() => navigate(card.path)} sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 3
                                    }}>
                                        <CardContent>
                                            <Typography variant="h5" component="div" sx={{
                                                fontWeight: 'bold',
                                                textAlign: 'center'
                                            }}>
                                                {card.label}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default LearningPath;
