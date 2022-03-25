import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { name, price, img } = product;
    return (
        <div className='card'>
            <img className='card-img' src={img} alt="" />
            <div className='card-info'>
                <h5>{name}</h5>
                <h4 className='mt-3'>Price: $<span className='price'>{price}</span></h4>
            </div>
            <button onClick={() => handleAddToCart(product)} className='card-btn'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;