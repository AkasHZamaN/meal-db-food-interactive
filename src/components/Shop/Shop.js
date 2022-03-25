import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Shop.css';

const Shop = () => {
    const [meals, setMeals] = useState([]);

    useEffect( () => {
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => setMeals(data))
    }, []);

    return (
        <div className='shop-container'>   
            <div className="meals-container">
                {
                    meals.map(meal => <Meal 
                    key = {meal.idMeal}
                    meal = {meal}
                    ></Meal>)
                }
            </div>
            <div className="cart-container">
                <h4>this is cart container</h4>
            </div>
        </div>
    );
};

export default Shop;