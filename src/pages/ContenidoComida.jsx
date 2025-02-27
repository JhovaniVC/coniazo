import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Paper, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from "@mui/material/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ContenidoComida = ({ data }) => {
    console.log('Datos desde padre:', data);

    const handleClick = (youtubeLink) => {
        if (youtubeLink) {
            window.open(youtubeLink, '_blank');
        }
    };

    return (
        <div>
            {
                !data || data.length === 0 ? (
                    <Typography variant="h4" color="initial">No hay datos para mostrar</Typography>
                ) : (
                    <Grid container padding={4} spacing={3}>
                        {data.map((recetadata, index) => (
                            <Grid item xs={6} md={4} key={index}>
                                <Paper>
                                    ID de comida: {recetadata.idMeal}
                                    <br />
                                    <img src={recetadata.strMealThumb} alt='' width={280} />
                                    <br />
                                    Comida: {recetadata.strMeal}
                                    <br />

                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`panel${index}-content`}
                                            id={`panel${index}-header`}
                                        >
                                            <Typography>Ingredientes</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ul>
                                                {[...Array(20)].map((_, i) => {
                                                    const ingredient = recetadata[`strIngredient${i + 1}`];
                                                    return ingredient ? <li key={i}>{ingredient}</li> : null;
                                                })}
                                            </ul>
                                        </AccordionDetails>
                                    </Accordion>


                                    <Button
                                        onClick={() => handleClick(recetadata.strYoutube)}
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            backgroundColor: "#ff0000",
                                            padding: "10px 20px",
                                            fontSize: "16px",
                                            borderRadius: "8px",
                                            boxShadow: 2,
                                            "&:hover": {
                                                backgroundColor: "#cc0000"
                                            }
                                        }}
                                    >
                                        Pica aquí para YouTube
                                    </Button>


                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                )
            }
        </div>
    );
};