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

    const removeItems = () => {
    setFoodCart([])  
    }

    const selectOneItem = () => {
        const foodItems = Math.floor(Math.random() * foodCart.length)
        const takeOneItem = foodCart.find((food, index) => index === foodItems)
        setFoodCart([takeOneItem])
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
                <Cart foodCart = {foodCart} removeItems={removeItems} selectOneItem={selectOneItem} ></Cart>
            </div>
        </div>
    );
};

export default Shop;