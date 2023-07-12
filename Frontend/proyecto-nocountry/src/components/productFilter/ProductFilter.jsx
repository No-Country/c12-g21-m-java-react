import { FormGroup, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const ProductFilter = ({ options, setOptions }) => {
    const handleOptionChange = (event) => {
        const { name, value } = event.target;
        setOptions((prevOptions) => ({
            ...prevOptions,
            [name]: value,
        }));
    };

    return (
        <div>
            <h3 className="filtro-title">Filtrar por:</h3>
            <FormGroup>
                <h5>Categoría</h5>
                <RadioGroup
                    aria-label="category"
                    name="category"
                    value={options.category}
                    onChange={handleOptionChange}
                >
                    <FormControlLabel
                        value="Muebles"
                        control={<Radio />}
                        label="Muebles"
                    />
                    <FormControlLabel
                        value="Accesorios"
                        control={<Radio />}
                        label="Accesorios"
                    />
                    <FormControlLabel
                        value="Mesadas"
                        control={<Radio />}
                        label="Mesadas"
                    />
                    <FormControlLabel
                        value=""
                        control={<Radio />}
                        label="Todos"
                    />
                </RadioGroup>
            </FormGroup>
            <h5>Ambiente</h5>
            <FormGroup>
                <RadioGroup
                    aria-label="ambient"
                    name="ambient"
                    value={options.ambient}
                    onChange={handleOptionChange}
                >
                    <FormControlLabel
                        value="Living"
                        control={<Radio />}
                        label="Living"
                    />
                    <FormControlLabel
                        value="Comedor"
                        control={<Radio />}
                        label="Comedor"
                    />
                    <FormControlLabel
                        value="Dormitorio"
                        control={<Radio />}
                        label="Dormitorio"
                    />
                    <FormControlLabel
                        value=""
                        control={<Radio />}
                        label="Todos"
                    />
                </RadioGroup>
            </FormGroup>
            <h5>Condición</h5>
            <FormGroup>
                <RadioGroup
                    aria-label="condition"
                    name="condition"
                    value={options.condition}
                    onChange={handleOptionChange}
                >
                    <FormControlLabel
                        value="Buena"
                        control={<Radio />}
                        label="Buena"
                    />
                    <FormControlLabel
                        value="Muy buena"
                        control={<Radio />}
                        label="Muy buena"
                    />
                    <FormControlLabel
                        value="Excelente"
                        control={<Radio />}
                        label="Excelente"
                    />
                    <FormControlLabel
                        value=""
                        control={<Radio />}
                        label="Todos"
                    />
                </RadioGroup>
            </FormGroup>
        </div>
    );
};

export default ProductFilter;
