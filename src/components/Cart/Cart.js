import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {foodCart} = props;

    // console.log(foodCart);
        
    

    return (
        <div className='cart'>
            <div className='cart-title'>
            <h3>Food <span>CarT</span></h3>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>
                <p className='cart-sub-title'>Selected <span>fOOd</span> Items</p>
                <div className='food-name'>
                {
                    foodCart.map(food => <p key={food.idMeal}>{food.strMeal}</p>)
                }
                </div>
                <div className='btn-items'>
                    <button className='select-btn'>
                        <p>Select One</p>
                    </button>
                    <button className='remove-btn'>
                        <p>Remove Items</p>
                    </button>
                </div>
        </div>
    );
};

export default Cart;