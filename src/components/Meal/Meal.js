import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { strMealThumb, strMeal, strPrice, strCategory, idMeal } = props.meal;
    return (
        <div className='meal-item'>
            <img src={strMealThumb} alt="" />
            <div className='meal-info'>
                <h3 className='meal-name'>{strMeal}</h3>
                <p>Price: ${strPrice}</p>
                <p>Category: {strCategory}</p>
                <p>{idMeal}</p>
            </div>
            <button className='cart-btn'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Meal;