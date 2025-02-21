import React from 'react'
import { ContenedorAprobado } from './alumnosProm/ContenedorAprobado';
import { ContenedorReprobado } from './alumnosProm/ContenedorReprobado';

export const AlumnoPromedio = () => {
    const materia1 = 5;
    const materia2 = 9;
    const resultado = (materia1 + materia2) / 2

    if (resultado > 8) {
        return (
            <ContenedorAprobado />
        )
    } else {
        return (
            <ContenedorReprobado />
        )
    }
    return (
        <div>AlumnoPromedio</div>

    )
}
