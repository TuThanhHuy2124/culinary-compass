import { useState } from "react";
import FoodDetail from "../components/FoodDetail";
import { SearchBar } from "../components/SearchBar";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CustomInput } from "../components/CustomInput";
import MealList from "../components/MealList";
import { useEffect } from "react";

export const reformatDate = (date) => {
    const [y, m, d] = date.split("-");
    return `${m}/${d}/${y}`
}

export default function DailyPlanner () {
    const [addFood, setAddFood] = useState(false);
    const [mealList, setMealList] = useState([]);
    const [foodId, setFoodId] = useState([]);
    const [clicked, setClicked] = useState(null);

    const queryParams = new URLSearchParams(window.location.search);
    const date = queryParams.get("date");
    const INSERT_FOOD_API = "https://culinarycompassapi.onrender.com/create/food_item/"
    const INSERT_MEAL_API = "https://culinarycompassapi.onrender.com/create/meal/"
    const ALL_FOOD_API = "https://culinarycompassapi.onrender.com/all_fooditems/"
    
    const test = {
        "Pizza": {
          calories: 100,
          fat: 10,
          carbs: 32,
          protein: 11,
          cholesterol: 16,
          sodium: 0.5,
          vitamin_a: 200
        },
        "Banana": {
            calories: 100,
            fat: 10,
            carbs: 32,
            protein: 11,
            cholesterol: 16,
            sodium: 0.5,
            vitamin_a: 200
        },
        "Orange": {
            calories: 100,
            fat: 10,
            carbs: 32,
            protein: 11,
            cholesterol: 16,
            sodium: 0.5,
            vitamin_a: 200
        },
    }
    
    const MEAL_NAMES = Object.keys(test).sort((a, b) => a.localeCompare(b));
    const [renderOption, setRenderOption] = useState(MEAL_NAMES);

    const handleMenu = (e) => {
        console.log(e);
        if(e.target.value === "") {
            setRenderOption(MEAL_NAMES)
        }
        else {
            const newOptions = MEAL_NAMES.filter((mealName) => mealName.toLowerCase().startsWith(e.target.value))
            setRenderOption(newOptions)
        }
    }

    const handleClick = (e) => {
        console.log(e.target.innerText);
        setClicked(null)
        setClicked(e.target.innerText)
        setAddFood(true)
    }

    const handleAddFood = () => {
        if(clicked !== null) { setClicked(null) }
        else setAddFood(!addFood)
    }

    useEffect(() => {
        const allFood = async () => {
            fetch(ALL_FOOD_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "user": localStorage.getItem("username") }),
            })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    console.log(response)
                    response.json().then(data => {
                        console.log(data);
                    });
                }
            });
        };

        allFood();
    }, []);

    const appendFood = async (e) => {
        console.log(e)
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
        console.log(nutrients)
        fetch(INSERT_FOOD_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nutrients),
        })
        .then(response => {
            console.log(response)
            if(response.ok)  { response.json().then(res => {
                setMealList(mealList.concat(nutrients["name"]));
                setFoodId(foodId.concat(res["item_id"]))
            })}
            setClicked(null);
        });

    }
    
    const createMeal = ()=>{
        if(!localStorage.getItem("username") || !document.getElementById("mealname")){
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
        fetch(INSERT_MEAL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "frequency": frequency,
                "username": localStorage.getItem("username"),
                "name": document.getElementById("mealname").value,
                "date": date,
            }),
        })
        .then(response => {
            if(response.ok) {
                console.log("Success")
            }
        });
    };
    

    return (
    <div className="relative min-h-[var(--min-display)] flex flex-col items-center justify-center z-99999 pt-10 pb-10">
        <Link to="/month"><h1 className="text-5xl mb-2 hover:underline active:border-8 active:no-underline active:text-gray-600 underline-offset-4 transition-all p-4 rounded-xl border-gray-600">{reformatDate(date)}</h1></Link>
        <h2 className="text-2xl">Your meal planning starts here!</h2>
        <SearchBar renderOption={renderOption} handleMenu={handleMenu} handleClick={handleClick}/>
        <Button className="!text-base my-4 w-[30vw] !bg-yellow-400 !text-blue-700" onClick={handleAddFood}>Add Custom Food Item</Button>
        {addFood &&
        <div className="flex w-full justify-around">
            <FoodDetail name={clicked} nutrients={test[clicked]}/>
            {(mealList !== null) && <MealList fooditems={mealList}></MealList>}
        </div>}
        <Button id="submitfood" onClick={appendFood} className="!text-base my-4 !bg-yellow-400 !text-blue-800 w-[20vw]">Add Food</Button>
        <div className="w-1/3 mt-4"><CustomInput id="mealname" name="Meal Name"/></div>
        <Button onClick={createMeal} className="!text-base !bg-yellow-400 !text-blue-800 mt-4 w-[20vw]">Add meal</Button>
        
        <img className="absolute bottom-0 left-0 z-[-1] size-[30vw]" src="../../backgrounds/curve_1.png"></img>
        <img className="absolute top-0 right-0 z-[-1] size-[30vw]" src="../../backgrounds/curve_2.png"></img>
    </div>
    );
}