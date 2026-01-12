import Navigation from "./components/Navigation"
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer"

export default function Layout() {
    
    return (
        <>
        <Navigation />
        <main>
            <Outlet /> 
        </main>
        <Footer />
        </>
    )
}