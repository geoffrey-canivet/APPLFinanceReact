import { useState } from 'react';
import './App.css';
import Finance from "./pages/Finance.jsx";

function App() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (

        <Finance className="dark:bg-gray-900" isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    );
}

export default App;
