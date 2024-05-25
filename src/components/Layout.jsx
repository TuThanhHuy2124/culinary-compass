import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import { IDInput } from "./IDInput";
import { LinkButton } from "./LinkButton";

export default function Layout () {
    
    return (
        <>
            <header className="w-screen h-max flex items-center justify-between">
                <h1 id="header-title" className="text-lg text-blue-800">CulinaryCompass</h1>
                <ul className="flex space-x-4">
                    <LinkButton name="Home" destination="/"></LinkButton>
                    <li><IDInput></IDInput></li>
                </ul>
            </header>
            <Outlet/>
            <footer className="w-screen h-max flex items-center justify-between">
                <LinkButton name="GitHub" destination="https://github.com/TuThanhHuy2124/culinary-compass"></LinkButton>
                <h1 id="footer-title" className="text-lg text-blue-800">CulinaryCompass</h1>
                <LinkButton name="Contact Us" destination="mailto:thtu1@uci.edu"></LinkButton>
            </footer>
        </>
    )
}