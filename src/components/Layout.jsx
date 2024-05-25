import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";

export default function Layout () {
    
    return (
        <>
            <header className="w-screen h-max flex items-center justify-between">
                <h1 id="header-title" className="text-lg text-blue-800">CulinaryCompass</h1>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                </ul>
            </header>
            <Outlet/>
            <footer className="w-screen h-max flex items-center justify-between">
                <a href="https://github.com/TuThanhHuy2124/culinary-compass"><Button>GitHub</Button></a>
                <h1 id="footer-title" className="text-lg text-blue-800">CulinaryCompass</h1>
                <a href="mailto:thtu1@uci.edu"><Button>Contact Us</Button></a>
            </footer>
        </>
    )
}