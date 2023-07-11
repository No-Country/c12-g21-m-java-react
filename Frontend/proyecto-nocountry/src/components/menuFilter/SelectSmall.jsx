import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall({order, setOrder}) {

    const handleChange = (event) => {
        setOrder(event.target.value)
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Orden</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={order}
                label="orden"
                onChange={handleChange}
            >
                
                <MenuItem value="0">por precio: de menor a mayor</MenuItem>
                <MenuItem value="1">por precio: de mayor a menor</MenuItem>
                <MenuItem value="2">Por defecto</MenuItem>
            </Select>
        </FormControl>
    );
}