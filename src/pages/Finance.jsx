import Navigation from "../components/Menus/Navigation/Navigation.jsx";
import Drawer from "../components/Menus/Drawer/Drawer.jsx";
import MainFinance from "../components/Finance/MainFinance/MainFinance.jsx";

const Finance = ({ isDrawerOpen, toggleDrawer }) => {
    return (
        <>
            <div className="dark:bg-gray-900">
                <Navigation toggleDrawer={toggleDrawer} />
                <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
                <MainFinance />
            </div>

        </>
    );
};

export default Finance;
