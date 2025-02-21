import { Button, Card, Paper, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

export const HomePage = () => {
    return (
        <div>
            <br />
            <Grid container spacing={2} padding={4} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={8}>
                    <TextField
                        label="Nombre de la comida"
                        variant="outlined"
                        fullWidth
                        sx={{
                            borderRadius: 2,
                            backgroundColor: 'white',
                            boxShadow: 1,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <Button
                        variant="contained"
                        sx={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            borderRadius: "8px",
                            boxShadow: 2
                        }}
                    >
                        Buscar
                    </Button>
                </Grid>
            </Grid>

            <Grid container spacing={2} padding={2}>
                {[...Array(3)].map((_, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
                            Hola Pedro Pony
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
