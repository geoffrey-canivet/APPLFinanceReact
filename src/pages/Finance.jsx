import { useEffect, useState } from "react";
import Navigation from "../components/Menus/Navigation/Navigation.jsx";
import Drawer from "../components/Menus/Drawer/Drawer.jsx";
import MainFinance from "../components/Finance/MainFinance/MainFinance.jsx";

const Finance = ({ isDrawerOpen, toggleDrawer, onDarkModeChange }) => {
    const [isDarkMode, setDarkMode] = useState(false);

    const handleToggleChange = (value) => {
        setDarkMode(value);
        onDarkModeChange(value); // Passez l'état à App
    };

    return (
        <div className={`dark:bg-gray-900 ${isDarkMode ? "dark" : ""}`}>
            <Navigation
                toggleDrawer={toggleDrawer}
                isDarkMode={isDarkMode}
                onToggleChange={handleToggleChange}
            />
            <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            <MainFinance />
        </div>
    );
};


export default Finance;
