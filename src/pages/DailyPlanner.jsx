import { useState } from "react";
import FoodDetail from "../components/FoodDetail";
import { SearchBar } from "../components/SearchBar";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";
import MealList from "../components/MealList";

export const reformatDate = (date) => {
    const [y, m, d] = date.split("-");
    return `${m}/${d}/${y}`
}

export default function DailyPlanner () {
    const [addFood, setAddFood] = useState(false);
    const [mealList, setMealList] = useState([]);
    const [foodId, setFoodId] = useState([]);
    const queryParams = new URLSearchParams(window.location.search);
    const date = queryParams.get("date");
    const INSERT_FOOD_API = "https://culinarycompassapi.onrender.com/create/food_item/"
    const INSERT_MEAL_API = "https://culinarycompassapi.onrender.com/create/meal/"

    

    const appendFood = async () => {
        var nutrients = new Object();
        if(document.getElementById("name") == null){return}
        nutrients["name"] = document.getElementById("name").value;
        var input = document.getElementById("nutrients");
        var children = input.getElementsByTagName("input");
        for (var i = 0; i < children.length; i++) {
            if (children[i].value > 0){
                nutrients[children[i].id.toLowerCase()] = children[i].value;
            }
        }
        fetch(INSERT_FOOD_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nutrients),
        })
        .then(response => {
            if(response.ok) {
                setMealList(mealList.concat(nutrients["name"]));
                setFoodId(foodId.concat(response["item_id"]))
            }
        });

    }

    const createMeal = ()=>{
        if(!localStorage.getItem("username")){
            window.location.href = "/";
        }
        var frequency = {}
        for (let i = 0; i < foodId.length; i++) {
            let ele = foodId[i];
            if (frequency[ele]) {
                frequency[ele] += 1;
            } else {
                frequency[ele] = 1;
            }
        }
        var id_to_frq = {[localStorage.getItem("username")]: frequency};
        fetch(INSERT_MEAL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(id_to_frq),
        })
        .then(response => {
            if(response.ok) {
                console.log("Success")
            }
        });
    };
    

    return (
    <div className="relative min-h-[var(--min-display)] flex flex-col items-center justify-center z-99999">
        <Link to="/month"><h1 className="text-5xl">{reformatDate(date)}</h1></Link>
        <h2 className="text-2xl">Your meal planning starts here!</h2>
        <SearchBar/>
        <Button className="my-4"onClick={(e) => setAddFood(!addFood)}>Add Custom Food Item</Button>
        <div className="flex w-full justify-around">
            {addFood && <FoodDetail/>}
            <MealList fooditems={mealList}></MealList>
        </div>
        <Button id="submitfood" onClick={appendFood} className="!bg-yellow-400 !text-blue-800">Add Food</Button>
        
        <img className="absolute bottom-0 left-0 z-[-1] size-[30vw]" src="../../backgrounds/curve_1.png"></img>
        <img className="absolute top-0 right-0 z-[-1] size-[30vw]" src="../../backgrounds/curve_2.png"></img>
        <div className="w-1/3 mt-8"><CustomInput name="Meal Name"/></div>
        <Button onClick={createMeal} className="!bg-yellow-400 !text-blue-800 my-2">Add meal</Button>
    </div>
    );
}