import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import './item-style.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import {increment, decrement} from '../../../../features/productSlice'

const Item = ({ item }) => {
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
        <div className='item-component my-5'>
            {/* <div className='item-favorite' onClick={handleFavorite}>
                {favorite == false ? <StarBorderIcon></StarBorderIcon> : <StarIcon></StarIcon>}
            </div> */}
            <Link to={`/detail/${item.idProduct}`} style={{ textDecoration: "none", color: 'black' }}>
                <div className='item-img-container'>
                    <img className='item-img' src={item.photos[0] ? item.photos[0].imagePath : ""} alt='producto'></img>
                </div>
                <div className='item-text'>
                    <div className='d-flex justify-content-between'>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    </div>
                    <p>{item.description}</p>
                </div>
            </Link>
        </div>

    )
}

export default Item