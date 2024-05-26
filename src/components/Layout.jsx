import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import { CustomInput } from "./CustomInput";
import { LinkButton } from "./LinkButton";
import { useState } from "react";

export default function Layout() {
    const [loggedIn, setLoggedIn] = useState(!(localStorage.getItem("username") === null));
    const date = new Date();
    const EMAIL_API = "https://culinarycompassapi.onrender.com/create/email"
    const saveUsername = () => {
        localStorage.setItem("username", document.getElementById("uid").value);
        setLoggedIn(true); 
    }
    const submitEmail = ()=> {
        if(!document.getElementById("email")){
            return
        }
        fetch(EMAIL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "mail": document.getElementById("email").value,
            }),
        })
         .then(response => {
            if(response.ok) { response.json().then( ()=> {
                console.log("Success, email added");
                document.getElementById("email").value = "";
            })}
         });
    }
    
    return (
        <>
            <header className="relative w-screen h-max flex items-center justify-between shadow-[0_4px_4px_rgba(143,140,140)] max-w-full z-[99999]">
                <Link to="/">
                    <div className="m-7 flex items-center ">
                        <img className="w-20" src="../../logos/chef.png"></img>
                        <h1 id="header-title" className="text-5xl text-blue-800">CulinaryCompass</h1>
                    </div>
                </Link>
                
                {!loggedIn ? 
                <ul className="flex items-center space-x-4 m-7">
                    <LinkButton destination="/" name="Home"></LinkButton>
                    <li><CustomInput id="uid" name="User ID:"/></li>
                    <Button onClick={saveUsername} className="!bg-yellow-400 !text-blue-800">Save</Button>
                </ul> :
                <ul className="flex space-x-4 m-7">
                    <LinkButton destination="/" name="Home"></LinkButton>
                    <LinkButton destination={`/day?date=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`} name="Today"></LinkButton>
                    <LinkButton destination={`/plan?date=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`} name="My Plan"></LinkButton>
                    <LinkButton destination="/month" name="Calendar"></LinkButton>
                </ul>
                }
            </header>
            <Outlet/>
            <footer className="w-screen h-max flex items-center justify-between max-w-full p-3 shadow-[0_-4px_4px_rgba(0,0,0,0.3)]">
                <a href="https://github.com/TuThanhHuy2124/culinary-compass" target="_blank">
                    <Button className="!bg-yellow-400 !text-blue-800 flex items-center justify-center`">
                        <img src="../../logos/github.svg" alt="" className="w-5 mr-1"/>
                        <p>GitHub</p>
                    </Button>
                </a>
                <div className="flex"><CustomInput name="Enter email newsletter:" id="email"></CustomInput><Button onClick={submitEmail} className="!bg-yellow-400 !text-blue-800">Join</Button></div>
                <a href="mailto:thtu1@uci.edu">
                    <Button className="!bg-yellow-400 !text-blue-800">Contact Us</Button>
                </a>
            </footer>
        </>
    );
}
