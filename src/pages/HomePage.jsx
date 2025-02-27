import { Button, Card, Paper, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useEffect } from 'react';
import { ContenidoComida } from './ContenidoComida';

export const HomePage = () => {

    const [textobuscar, setTextoB] = React.useState('')

    const [datos, setDatos] = React.useState(
        { meals: [] }
    )

    const obtenercomidanombre = async () => {
        const buscar = textobuscar.trim()
        if (textobuscar == "") {
            alert("Campo vacio, escribe ago")
        } else {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${buscar}`, requestOptions);
                const result = await response.json();
                setDatos(result)
                console.log(result)
            } catch (error) {
                console.error(error);
            };

        }
    }

    React.useEffect(() => {
        const obtenerdata = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef');
                const result = await response.json();
                setDatos(result);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        obtenerdata();
    }, []);
    console.log("Contenido input", textobuscar)

    return (
        <div>
            <br />
            <Grid container spacing={2} padding={4} xs={{ justifyContent: "center", alignItems: "center" }}>
                <Grid size={{ xs: 8, md: 8 }}>
                    <TextField
                        onChange={e => setTextoB(e.target.value)}
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
                        onClick={obtenercomidanombre}
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

            <ContenidoComida
                data={datos.meals}
            />




        </div>
    );
};
