import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider } from '@mui/material';
import { ListaProductosDialogo } from './ListaProductosDialogo';

export default function ListaVerduras() {

    const data = {
        "store": {
            "book": [
                {
                    "category": "reference",
                    "author": "Nigel Rees",
                    "title": "Sayings of the Century",
                    "price": 8.95,
                    "in-stock": true,
                    "sold": true
                },
                {
                    "category": "fiction",
                    "author": "Evelyn Waugh",
                    "title": "Sword of Honour",
                    "price": 12.99,
                    "in-stock": false,
                    "sold": true
                },
                {
                    "category": "fiction",
                    "author": "Herman Melville",
                    "title": "Moby Dick",
                    "isbn": "0-553-21311-3",
                    "price": 8.99,
                    "in-stock": true,
                    "sold": false
                },
                {
                    "category": "fiction",
                    "author": "J. R. R. Tolkien",
                    "title": "The Lord of the Rings",
                    "isbn": "0-395-19395-8",
                    "price": 22.99,
                    "in-stock": false,
                    "sold": false
                }
            ],
            "bicycle": {
                "color": "red",
                "price": 19.95,
                "stock": true,
                "sold": false
            }
        }
    }
    const [verdur, setverdur] = React.useState('');
    const verduras = [
        { id: '1', nombre: 'lechuga', descripcion: 'Verdura 100% mexicana ', precio: 23, cantidad: 12 },
        { id: '2', nombre: 'tomate', descripcion: 'Verdura 100% mexicana ', precio: 43, cantidad: 15 },
        { id: '3', nombre: 'papa', descripcion: 'Verdura 100% mexicana ', precio: 32, cantidad: 24 },
        { id: '4', nombre: 'zanahoria', descripcion: 'Verdura 100% mexicana ', precio: 25, cantidad: 52 },
        { id: '5', nombre: 'cebolla', descripcion: 'Verdura 100% mexicana ', precio: 46, cantidad: 32 },
        { id: '6', nombre: 'espinaca', descripcion: 'Verdura 100% mexicana ', precio: 10, cantidad: 2 }
    ];

    const handleSelectChange = (event) => {
        setverdur(event.target.value);
    };

    return (
        <div>
            <h2>Hola, soy el componente Lista Verduras</h2>

            {verduras.length > 0 ? (
                verduras.map((data, index) => (
                    <div key={index}>
                        <ul>
                            <li>
                                {data.id} | {data.nombre} | {data.descripcion}
                                <Button onClick={() => alert(data.cantidad)} variant="contained" color="primary">
                                    Ver Stock
                                </Button>
                            </li>
                        </ul>
                    </div>
                ))
            ) : (
                <p>No hay datos disponibles.</p>
            )}

            {verduras.length > 0 ? (
                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="tabla de verduras">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Descripción</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {verduras.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{data.id}</TableCell>
                                    <TableCell>{data.nombre}</TableCell>
                                    <TableCell>{data.descripcion}</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => alert(data.cantidad)} variant="contained" color="primary">
                                            Ver Stock
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <p>No hay datos disponibles.</p>
            )}

            <Box sx={{ minWidth: 120, marginTop: '20px' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Selecciona una Verdura</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={verdur}
                        label="Selecciona una Verdura"
                        onChange={handleSelectChange}
                    >
                        {verduras.map((data, index) => (
                            <MenuItem key={index} value={data.nombre}>
                                {data.nombre}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Divider color='primary' />

            <ListaProductosDialogo
                data={data.store}
            />
        </div>
    );
}
