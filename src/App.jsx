import * as React from 'react';
import ComponenteEncabezado from './components/ComponenteEncabezado';
import ListaProductos from './components/ListaProductos';
import { MiProyecto } from './components/MiProyecto';
import ListaVerduras from './components/productos/ListaVerduras';
import { ListaProductosDialogo } from './components/productos/ListaProductosDialogo';
import { HomePage } from './pages/HomePage';


export default function App() {
  return (
    <>

      <ComponenteEncabezado />
      <HomePage></HomePage>



    </>
  );

}