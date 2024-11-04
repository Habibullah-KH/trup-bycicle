import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="overflow-hidden">
            {/* Navbar */}
            <div className=" fixed top-0 z-10 w-full">
            <NavBar/>
            </div>
            {/* Dynamic Section */}
            <div className="min-h-[calc(100vh-405.25px)] mx-auto">
                <Outlet/>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;