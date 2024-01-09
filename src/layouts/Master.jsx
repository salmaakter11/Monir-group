
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopBar from "./TopBar";

const Master = () => {

    return (
        <>
            <TopBar />
            <Outlet />
            <Footer />

        </>
    );
};

export default Master;