import { useState } from "react";
import FoodDetail from "../components/FoodDetail";
import { SearchBar } from "../components/SearchBar";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";
import MealList from "../components/MealList";

export default function DailyPlanner () {
    const [addFood, setAddFood] = useState(false);
    const [mealList, setMealList] = useState([]);
    const [foodId, setFoodId] = useState([]);
    const queryParams = new URLSearchParams(window.location.search);
    const date = queryParams.get("date");

    const addMeal = ()=>{
        setMealList(document.getElementById("name").value);

    };
    const foodSubmission = document.getElementById("submitfood"); 
    if (foodSubmission){
        foodSubmission.addEventListener("click", addMeal);
    }
    


    return (
    <div className="relative min-h-[var(--min-display)] flex flex-col items-center justify-center z-99999">
        <Link to="/month"><h1 className="text-5xl">{date}</h1></Link>
        <h2 className="text-2xl">Your meal planning starts here!</h2>
        <SearchBar/>
        <Button className="my-4"onClick={(e) => setAddFood(!addFood)}>Add Custom Food Item</Button>
        <div className="flex w-4/5 justify-center">
            {addFood && <FoodDetail/>}
            <MealList fooditems={mealList}></MealList>
        </div>
        
        <img className="absolute bottom-0 left-0 z-[-1] size-[30vw]" src="../../backgrounds/curve_1.png"></img>
        <img className="absolute top-0 right-0 z-[-1] size-[30vw]" src="../../backgrounds/curve_2.png"></img>
        <div className="w-1/3 mt-8"><CustomInput name="Meal Name:"/></div>
        <Button onClick={addMeal} className="!bg-yellow-400 !text-blue-800 my-2">Add meal</Button>
    </div>
    );
}