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
                <p>Selected items: {foodCart.length}</p>
                <div className='food-name'>
                {
                    foodCart.map(food => <p key={food.idMeal}>{food.strMeal}</p>)
                }
                </div>
        </div>
    );
};

export default Cart;