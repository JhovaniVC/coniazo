import { Card, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react'
import MiDialogo from './MiDialogo';

export const ListaProductosDialogo = (props) => {
    const data = props.data

    console.log(data)
    return (
        <div>
            <h2>Consumo de Jason</h2>

            <Grid container spacing={2} >
                <Grid size={{ sm: 6, md: 12 }}>
                    <Card variant="outlined" color="success" style={{ padding: 15 }}>
                        <Typography variant='h4' color='initial'>Bicicleta en promocion</Typography>
                        <Typography variant='h5' color='initial'>Precio mas bajo: {data.bicycle.price}</Typography>
                        <Typography variant='h5' color='initial'>Stock: {data.bicycle.stock ? "Disponible" : "No disponible"} </Typography>
                        <Typography variant='h5' color='initial'>Color: {data.bicycle.color}</Typography>


                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3} >
                {data.book.map((libro, index) => (
                    <Grid size={{ sm: 6, md: 12 }} key={index}>
                        <Card variant="outlined" color="success" style={{ padding: 15 }}>
                            <Typography variant='h4' color='initial'>Libro en promocion</Typography>
                            <Typography variant='h5' color='initial'>Categoria: {libro.category}</Typography>
                            <Typography variant='h5' color='initial'>Autor: {libro.author} </Typography>
                            <Typography variant='h5' color='initial'>Titulo: {libro.title}</Typography>
                            <MiDialogo
                                datos={libro}
                            />

                        </Card>
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}
