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
            <div>
                <div className='question'>
                <p>Q1. State এবং Props এর মধ্যে পার্থক্য কি ?</p>
                <small><span>উত্তর:</span> State অভ্যন্তরীণ এবং element দ্বারা নিয়ন্ত্রিত হয় যখন প্রপগুলি বাহ্যিক হয় এবং উপাদানটি রেন্ডার করে যা কিছু দ্বারা নিয়ন্ত্রিত হয়। State এবং Props উভয়ই একটি উপাদানের মধ্যে ডেটা নিয়ন্ত্রণ করতে ব্যবহৃত হয়, সাধারণত Props parents দ্বারা সেট করা হয় এবং child elements এ প্রেরণ করা হয় এবং সেগুলি সমগ্র element জুড়ে স্থির করা হয়।</small>
                </div>
                <div className='question-2'>
                    <p>Q2 State কিভাবে কাজ করে ?</p>
                    <small><span>উত্তর:</span> ইভেন্ট হ্যান্ডলার, সার্ভার প্রতিক্রিয়া, বা প্রপ পরিবর্তনের প্রতিক্রিয়ায় State আপডেট করা যায় । এটি setState() পদ্ধতি ব্যবহার করে করা হয়। setState() পদ্ধতিটি কম্পোনেন্ট স্টেটে করা সমস্ত আপডেটকে সারিবদ্ধ করে এবং কম্পোনেন্ট এবং এর চাইল্ড আপডেট করা অবস্থায় পুনরায় রেন্ডার করার জন্য প্রতিক্রিয়াকে নির্দেশ করে।</small>
                </div>
            </div>
        </div>
    );
};

export default Shop;