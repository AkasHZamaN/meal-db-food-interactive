import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Shop.css';

const Shop = () => {
    const [meals, setMeals] = useState([]);
    const [foodCart, setFoodCart] = useState([]);

    useEffect( () => {
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => setMeals(data))
    }, []);

    const addToCart = (meal) => {
        const newFoodCart = [...foodCart, meal];
        setFoodCart(newFoodCart);
    }

    return (
        <div className='shop-container'>   
            <div className="meals-container">
                {
                    meals.map(meal => <Meal 
                    key = {meal.idMeal}
                    meal = {meal}
                    addToCart = {addToCart}
                    ></Meal>)
                }
            </div>
            <div className="cart-container">
                <Cart foodCart={foodCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;