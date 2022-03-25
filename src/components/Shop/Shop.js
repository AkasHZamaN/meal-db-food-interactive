import React, { useEffect, useState } from 'react';
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
        console.log(meal);
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
                <h3>Food Cart</h3>
                <p>selected items: {foodCart.length}</p>
            </div>
        </div>
    );
};

export default Shop;