import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import './cardProduct-style.css';
const CardProduct = ({ title, description, price, img }) => {
    const [favorite, setFavorite] = useState(false);

    return (
        <div className='card_product-component'>
            <div className='card_product-favorite' onClick={() => { setFavorite(!favorite) }}>
                {favorite == false ? <StarBorderIcon></StarBorderIcon> : <StarIcon></StarIcon>}
            </div>

            <div className='card_product-img-container'>
                <img className='card_product-img' src="https://d2oo5quzpsdib.cloudfront.net/Website/General/Standard-Product-Icon-500.png" alt='producto'></img>
            </div>
            <div className='card_product-text'>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>${price}</p>
            </div>
        </div>

    )
}

export default CardProduct