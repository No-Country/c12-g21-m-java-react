import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({ message, rating, setRating, handleRating, status }) {
    const [value, setValue] = React.useState(0)
    const [voted, setVoted] = React.useState(false)
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >

            {status == "RESERVADO" ? (
                <>
                    <Typography component="legend">Puedes votar al finalizar la compra</Typography>
                    <Rating name='disabled' size={"large"} disabled  />
                </>
            ) : 
            !voted ? (
                <>
                    <Typography component="legend">Califica al vendedor</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        size="large"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onClick={() => {
                            setVoted(true)
                            handleRating(value)
                        }
                        }
                    />
                </>
            ) : (
                    <>
                        <Typography component="legend">¡Gracias por votar!</Typography>
                        <Rating name='disabled' size={"large"} value={value} readOnly />
                    </>
            )
        }

        </Box>
    );
}
