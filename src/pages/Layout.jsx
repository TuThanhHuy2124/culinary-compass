import { Link, Outlet } from "react-router-dom";

export default function Layout () {
    
    return (
        <>
            <header className="w-screen h-max">
                <h1 id="header-title" className="">CulinaryCompass</h1>
            </header>
            <ul>
                <Link to="/"><li>Home</li></Link>
            </ul>
            <Outlet/>
            <footer>
                <h1 id="footer-title" className="">CulinaryCompass</h1>
            </footer>
        </>
    )
}