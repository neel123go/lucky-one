import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [choose, setChoose] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        if (cart.length < 4) {
            const newCart = [...cart, product];
            setCart(newCart);
        } else {
            alert('You Cannot add more than 4 products');
        }
    }

    const handleChooseOneBtn = (randomNumber) => {
        if (cart.length > 0) {
            const selectedProduct = cart[randomNumber];
            setChoose(selectedProduct);
        }
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container p-4 mt-5">
                <h2>Selected Clocks</h2>
                {
                    cart.map(product => <Cart key={product.id} product={product} ></Cart>)
                }

                <button onClick={() => handleChooseOneBtn(Math.floor((Math.random() * cart.length)))} className='choose-btn'>Choose 1 For Me</button>
                <Cart product={choose}></Cart>
                <button onClick={() => { setCart([]); setChoose([]); }} className='choose-again-btn'>Choose Again</button>
            </div>
        </div >
    );
};

export default Shop;