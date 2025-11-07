import Navbar from "../components/NavBar.jsx";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Outlet />
            <Footer />
        </div>
    );
}
