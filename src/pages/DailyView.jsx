import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { reformatDate } from "./DailyPlanner";
import MealsDisplay from "../components/MealsDisplay";
import Spinner from "../components/Spinner";

export default function DailyView() {
    const queryParams = new URLSearchParams(window.location.search);
    const date = queryParams.get("date");
    const start = queryParams.get("start");
    const [meals, setMeals] = useState(null);
    const [loading, setLoading] = useState(true);
    const DAILY_API = "https://culinarycompassapi.onrender.com/day";
    useEffect(() => {
        const getData = async () => {
            console.log(localStorage.getItem("username"), date);
            fetch(DAILY_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: localStorage.getItem("username"),
                    day: date,
                }),
            })
             .then(response => {
                if(response.ok) { response.json().then(meals => {
                    console.log(meals)
                    setMeals(meals);
                })}
                setLoading(false);
             });
        };
        getData();
        if(start !== null && window.location.href.indexOf("#") === -1) {
            window.location.href = window.location.href + `#${start}`
        }
    }, []);

    return (<>
        {meals !== null &&
        <div className="relative">
            <div className="flex flex-col items-center justify-start min-h-[var(--min-display)]">
                <Link to="/month">
                    <h1 className="text-5xl m-12 hover:underline active:border-8 active:no-underline active:text-gray-600 underline-offset-4 transition-all p-4 rounded-xl border-gray-600">{reformatDate(date)}</h1>
                </Link>
                <MealsDisplay title="test" meals={meals} />
            </div>
            <img className="absolute bottom-0 left-0 z-[-1] size-[30vw]" src="../../backgrounds/curve_1.png"></img>
            <img className="absolute top-0 right-0 z-[-1] size-[30vw]" src="../../backgrounds/curve_2.png"></img>
        </div>}
        {loading && <Spinner/>}
        </>
    );
}
