import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function BasicRating({handleRating, status }) {
    const [value, setValue] = React.useState()
    const [review, setReview] = React.useState()
    const [voted, setVoted] = React.useState(false)
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            {!voted ? (
                <>
                    <Typography component="legend">Califica al vendedor</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        size="large"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    
                    />
                    <textarea placeholder="Escribe una reseña" value={review} rows={4} onChange={(event) => {
                            setReview(event.target.value);
                        }} className="card-textarea"></textarea>
                    <Button variant='contained' onClick={() => {setVoted(true); handleRating(value, review)}}>Enviar</Button>
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
