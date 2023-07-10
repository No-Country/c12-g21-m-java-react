import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import './item-style.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {increment, decrement} from '../../../../features/productSlice'

const Item = ({ title, description, price, img, id }) => {
    const [favorite, setFavorite] = useState(false);
    const dispatch = useDispatch()

    const handleFavorite = () => {
        if (favorite === false) {
            setFavorite(true)
            dispatch(increment())
        } else {
            setFavorite(false)
            dispatch(decrement())
        }

    }

    return (
        <div className='item-component'>
            <div className='item-favorite' onClick={handleFavorite}>
                {favorite == false ? <StarBorderIcon></StarBorderIcon> : <StarIcon></StarIcon>}
            </div>
            <Link to={`/detail/${id}`} style={{ textDecoration: "none", color: 'black' }}>
                <div className='item-img-container'>
                    <img className='item-img' src="https://d2oo5quzpsdib.cloudfront.net/Website/General/Standard-Product-Icon-500.png" alt='producto'></img>
                </div>
                <div className='item-text'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>${price}</p>
                </div>
            </Link>
        </div>

    )
}

export default Item