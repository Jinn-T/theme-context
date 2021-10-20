import "./App.css";
import Form from "./containers/Form";
import Header from "./containers/Header";
import ThemeProvider from "./context/ThemeContext";
import styles from "./App.module.scss";

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Header />
                <Form />
            </div>
        </ThemeProvider>
    );
}

export default App;
