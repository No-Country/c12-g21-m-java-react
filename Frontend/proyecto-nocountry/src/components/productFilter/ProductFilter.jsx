import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

const ProductFilter = () => {
    return (
        <div>
            <h3 className='filtro-title'>Filtrar por:</h3>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Categoría" />
                <FormControlLabel control={<Checkbox />} label="Ambiente" />
                <FormControlLabel control={<Checkbox />} label="Tipo de mueble" />
                <FormControlLabel control={<Checkbox />} label="Estado" />
            </FormGroup>
        </div>
    )
}

export default ProductFilter