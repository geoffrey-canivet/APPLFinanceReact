import Finance from "./pages/Finance.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const isDarkMode = useSelector((state) => state.isDarkMode); // Accès à l'état
    const dispatch = useDispatch();

    const toggleDrawer = () => {
        console.log("Drawer toggle functionality here");
    };

    const toggleDarkMode = () => {
        dispatch({ type: 'TOGGLE_DARK_MODE' }); // Envoi de l'action pour basculer le mode
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            console.log("Dark mode activé");
        } else {
            document.documentElement.classList.remove("dark");
            console.log("Dark mode désactivé");
        }
    }, [isDarkMode]);

    return (
        <Finance
            className="bg-gray-400 dark:bg-gray-900"
            isDrawerOpen={false}
            toggleDrawer={toggleDrawer}
            onToggleDarkMode={toggleDarkMode} // Transmettez la fonction
        />
    );
}

export default App;
