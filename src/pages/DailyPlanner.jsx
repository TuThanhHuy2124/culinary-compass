import { useState } from "react";
import FoodDetail from "../components/FoodDetail";
import { SearchBar } from "../components/SearchBar";
import { Button } from "@material-tailwind/react";

export default function DailyPlanner () {
    const [addFood, setAddFood] = useState(false);

    return (
    <div className="relative min-h-[var(--min-display)] flex flex-col items-center justify-center z-99999">
        <h1 className="text-5xl">5/23/2024</h1>
        <h2 className="text-2xl">Your meal planning starts here!</h2>
        <SearchBar/>
        <Button onClick={(e) => setAddFood(!addFood)}>Add Custom Food Item</Button>
        {addFood && <FoodDetail/>}
        <img className="absolute bottom-0 left-0 z-[-1] size-[30vw]" src="../../curve_1.png"></img>
        <img className="absolute top-0 right-0 z-[-1] size-[30vw]" src="../../curve_2.png"></img>
    </div>
    )
}