import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Header.module.scss";

const Header = () => {
    const { setDarkTheme, darkTheme } = useContext(ThemeContext);

    // onclick handler, so when we click the button it will call the function of setDarkTheme and changes it
    const handleClick = (event) => {
        setDarkTheme(!darkTheme);
    };

    return (
        <div className={styles.head}>
            <button
                className={styles.darkTheme}
                value={darkTheme}
                onClick={handleClick}
            >
                Toggle Light Mode!
            </button>
        </div>
    );
};

export default Header;
