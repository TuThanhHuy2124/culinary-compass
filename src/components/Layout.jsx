import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import { IDInput } from "./IDInput";
import { LinkButton } from "./LinkButton";

export default function Layout () {
    
    return (
        <>
            <header className="w-screen h-max flex items-center justify-between shadow-md">
                <Link to="/"><h1 id="header-title" className="text-lg text-blue-800 p-2.5">CulinaryCompass</h1></Link>
                <ul className="flex space-x-4">
                    <LinkButton name="Home" destination="/"></LinkButton>
                    <li><IDInput></IDInput></li>
                </ul>
            </header>
            <Outlet/>
            <footer className="w-screen h-max flex items-center justify-between shadow-[-4px_0_4px_2px_rgba(0,0,0,0.3)]">
                <a href="https://github.com/TuThanhHuy2124/culinary-compass"><Button className="!bg-yellow-300 !text-blue-800">GitHub</Button></a>
                <h1 id="footer-title" className="text-lg text-blue-800 p-2.5">CulinaryCompass</h1>
                <a href="mailto:thtu1@uci.edu"><Button className="!bg-yellow-300 !text-blue-800 !m-2.5">Contact Us</Button></a>
            </footer>
        </>
    )
}