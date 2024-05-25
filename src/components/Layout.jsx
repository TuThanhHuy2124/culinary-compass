import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import { CustomInput } from "./CustomInput";
import { LinkButton } from "./LinkButton";

export default function Layout() {
    return (
        <>
            <header className="relative w-screen h-max flex items-center justify-between shadow-[0_4px_4px_rgba(143,140,140)] max-w-full z-[99999]">
                <Link to="/"><h1 id="header-title" className="text-5xl text-blue-800 m-7">CulinaryCompass</h1></Link>
                <ul className="flex space-x-4 m-7">
                    <Link to="/">
                        <Button className="!bg-yellow-400 !text-blue-800">Home</Button>
                    </Link>
                    <li><CustomInput id="uid" name="User ID:"/></li>
                </ul>
            </header>
            <Outlet/>
            <footer className="w-screen h-max flex items-center justify-between max-w-full p-3 shadow-[0_-4px_4px_rgba(0,0,0,0.3)]">
                <a href="https://github.com/TuThanhHuy2124/culinary-compass" target="_blank">
                    <Button className="!bg-yellow-400 !text-blue-800 !font-[Artifika]">GitHub</Button>
                </a>
                <h1 id="footer-title" className="text-2xl text-blue-800">CulinaryCompass</h1>
                <a href="mailto:thtu1@uci.edu">
                    <Button className="!bg-yellow-400 !text-blue-800 !font-[Artifika]">Contact Us</Button>
                </a>
            </footer>
        </>
    );
}
