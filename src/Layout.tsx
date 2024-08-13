import { Outlet } from "react-router-dom";
import BackgroundGrid from "./components/BackgroundGrid";
import BackgroundGradient from "./components/BackgroundGradient";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
    return (
        <div className="w-full min-h-screen font-rubik relative overflow-x-hidden overflow-y-auto">
            <BackgroundGrid />
            <BackgroundGradient />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
