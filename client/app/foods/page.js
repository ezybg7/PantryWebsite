import styles from "../styles/foods.module.css";
import Navbar from "../../components/navbar";

const Foods = () => {
    return (
        <div className={styles.body}>
            <Navbar />
            <title>Pantry | Food</title>
            <h1>Food Page</h1>
            <div>
                <div>YOUR FOODS</div>
                <form action="#">
                    <div>
                        <label>Food</label>
                        <input type="food" name="food" id="food" />
                    </div>
                    <div>
                        <label>Date</label>
                        <input type="date" name="date" id="date" />
                    </div>
                      <button type="submit">Add food</button>
                </form>
            </div>
        </div>
    );
};

export default Foods;
