import Navigation from "../components/Menus/Navigation/Navigation.jsx";
import Drawer from "../components/Menus/Drawer/Drawer.jsx";
import MainFinance from "../components/Finance/MainFinance/MainFinance.jsx";

const Finance = ({ isDrawerOpen, toggleDrawer }) => {
    return (
        <>
            <Navigation toggleDrawer={toggleDrawer} />
            <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            <MainFinance />
        </>
    );
};

export default Finance;
