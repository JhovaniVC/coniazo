import React, { useState } from 'react'; // Importamos React y el hook useState
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material'; // Importamos Material UI

// Crear un componente funcional
export const MiProyecto = () => {
    const [filter, setFilter] = useState('all'); // Hook de estado para manejar el filtro

    // Leer archivo JSON
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
                "in-stock": true,
                "sold": false
            }
        }
    };

    // input
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // uso de condicionales
    const filteredBooks = filter === 'all' ? data.store.book : data.store.book.filter(book => book['in-stock'] === (filter === 'in-stock'));

    // Función para manejar la visualización de detalles de un libro
    const handleViewDetails = (book) => {
        alert(`Título: ${book.title}\nAutor: ${book.author}\nPrecio: $${book.price}\nDisponible: ${book['in-stock'] ? 'Sí' : 'No'}`);
    };

    return (
        <div>
            <h2>Lista de Libros</h2>
            {/* Input Select */}
            <FormControl fullWidth style={{ marginBottom: '20px' }}>
                <InputLabel>Filtrar por disponibilidad</InputLabel>
                <Select value={filter} onChange={handleFilterChange}>
                    <MenuItem value="all">Todos</MenuItem>
                    <MenuItem value="in-stock">En Stock</MenuItem>
                    <MenuItem value="out-of-stock">Agotado</MenuItem>
                </Select>
            </FormControl>


            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell>Autor</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Disponibilidad</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Uso de .map para recorrer y mostrar los libros */}
                        {filteredBooks.map((book, index) => (
                            <TableRow key={index}>
                                <TableCell>{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>${book.price}</TableCell>
                                <TableCell>{book['in-stock'] ? 'Disponible' : 'Agotado'}</TableCell>
                                <TableCell>
                                    {/* Botón para ver detalles de un libro */}
                                    <Button variant="contained" color="primary" onClick={() => handleViewDetails(book)}>
                                        Ver Detalles
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
