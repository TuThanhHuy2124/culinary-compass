import { Link } from "react-router-dom"
import MealsDisplay from "../components/MealsDisplay";
import { useEffect } from "react";

export default function DailyView () {
    const queryParams = new URLSearchParams(window.location.search);
    const date = queryParams.get("date");
    const start = queryParams.get("start");

    useEffect(() => {
        if(window.location.href.indexOf("#") === -1) {
            window.location.href = window.location.href + `#${start}`
        }
    }, [])

    const testObj = [
        {breakfast: ["foodA", "foodB", "foodC"]},
        {lunch: ["foodA", "foodB", "foodC"]},
        {dinner: ["foodA", "foodB", "foodC"]},
        {side: ["foodA", "foodB", "foodC"]},
    ]

    return (
    <div className="flex flex-col items-center justify-start min-h-[var(--min-display)]">
        <Link to="/month"><h1 className="text-5xl m-12">{date}</h1></Link>
        <MealsDisplay title="test" meals={testObj}/>
    </div>
    )
}