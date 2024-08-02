
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarTop from "../Navbar/NavbarTop";
const Main = () => {
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <div className="w-full h-full fixed top-0 -z-10">
                    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                </div>
                <div className="max-w-screen-xl mx-auto">
                    <NavbarTop></NavbarTop>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Main;