import React, { useState } from 'react'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import ListaVerduras from './productos/ListaVerduras'

const ListaProductos = () => {
    const [home, sethome] = useState(false)


    const changestate = () => {
        sethome(!home)
    }
    console.log('Tu switch esta:', home)
    return (
        <div>
            <Switch
                value={home}
                checked={home}
                onChange={changestate}
                inputProps={{ "aria-label": '' }}
            />

            <Typography variant={home ? "h2" : "h4"} color={home ? "info" : "textDisabled"}>Luz cuartito</Typography>

            <Divider></Divider>

            <ListaVerduras></ListaVerduras>



        </div>
    )
}

export default ListaProductos