import React from 'react';
import './Cart.css';

const Cart = ({ product }) => {
    const { name, img } = product;
    return (
        <div className='cart-product-container mt-3'>
            <img className='cart-img' src={img} alt="" />
            <p className='cart-text'>{name}</p>
        </div>
    );
};

export default Cart;