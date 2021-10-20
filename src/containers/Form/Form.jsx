import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Form.module.scss";

const Form = () => {
    const { darkTheme } = useContext(ThemeContext);
    console.log(darkTheme);

    // here we want to change our theme colour by creating our class with an array
    const currentTheme = [styles.form]; //styles.Form

    // toggle each class depending on the value of darkTheme
    if (darkTheme === true) {
        currentTheme.push(styles.light);
    } else {
        currentTheme.push(styles.dark);
    }

    // now we want to join our array meaning we apply the class styling to our form div
    return (
        <div className={currentTheme.join(" ")}>
            <label>First Name:</label>
            <input></input>
            <label>Last Name:</label>
            <input></input>
            <button>Submit</button>
        </div>
    );
};

export default Form;
