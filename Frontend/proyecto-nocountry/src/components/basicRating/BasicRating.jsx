import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import axios from "axios";
import { useSelector } from "react-redux";

export default function BasicRating({idUser, idSale}) {
    const [value, setValue] = React.useState()
    const [review, setReview] = React.useState()
    const [voted, setVoted] = React.useState(false)
    const user = useSelector(state => state.user)

    const handleRating = () => {
        setVoted(true)
        axios.post("https://c12-21-m-java-react-ecommerce.onrender.com/ratings", {
            ratingValue: value,
            review: review,
            idSale: idSale,
            idUser: idUser
        },
        {
            headers: {
                Authorization: `Bearer ${user.jwtToken}`,
            }
        }
        )
        .then()
        .catch()
    }
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
                    <Button variant='contained' onClick={handleRating}>Enviar</Button>
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
