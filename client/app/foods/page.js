"use client";
import styles from "../styles/foods.module.css";
import Navbar from "../../components/navbar";
import FoodInput from "../components/FoodInput";
import axios from "axios";
import { useState, useEffect } from "react";

const Foods = () => {
    const [amount, setAmount] = useState();
    const [date, setDate] = useState();
    const [food, setFood] = useState();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        getFoods();
    });

    const sendFood = () => {
        axios.post("http://localhost:5000/addFood", { food, date, amount }).then((res) => {
            console.log(res.data);
            setFoods([...foods, { food, date, amount }]);
        });
    };

    const getFoods = () => {
        axios.get("http://localhost:5000/getFoods").then((res) => {
            console.log(res.data);
            setFoods(res.data);
        });
    };

    const getNutrition = () => {
        axios.get("http://localhost:5000/foodnutrition", { food }).then((res) => {
            console.log(res.data);
        });
    };

    return (
        <div className={styles.body}>
            <Navbar />
            <title>Pantry | Food</title>
            <h1>Food Page</h1>
            <div>
                <div>YOUR FOODS</div>
                <form action="#" onSubmit={(event) => event.preventDefault()}>
                    <div>
                        <label>Food</label>
                        <FoodInput value={food} onChange={setFood} />
                    </div>
                    <div>
                        <label>Date</label>
                        <input
                            onChange={(e) => setDate(e.target.value)}
                            type="datetime-local"
                            value={date}
                            min={Date(Date.now())}
                        ></input>
                    </div>
                    <div>
                        <label>Amount</label>
                        <input
                            type="number"
                            onChange={(e) => setAmount(parseInt(e.target.value))}
                            value={amount}
                        ></input>
                    </div>
                    <button type="submit" onClick={sendFood}>
                        Add food
                    </button>
                </form>
                <div>
                    {foods.map((food, i) => (
                        <div className="food-list-display">
                            <p>Food: {food.food}</p>
                            <p>Expiration date: {food.date.toString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Foods;
