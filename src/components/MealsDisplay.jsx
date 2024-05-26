import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Button,
  } from "@material-tailwind/react";

export default function MealsDisplay ({ meals }) {
    let mealNames = [];
    const DELETE_FOOD_API = "https://culinarycompassapi.onrender.com/delete/fooditem/"


    const [open, setOpen] = useState(0);
    console.log(meals)
    
    for(const meal in meals) {mealNames.push(meal)}
    console.log(mealNames)

    const capitalize = (str) => {
        let result = str
        if(str.length > 0) {result = str[0].toUpperCase() + str.substring(1)}
        return result
    }

    const humanize = (str) => {
        if(str.indexOf("_") > -1) {
            const [first, second] = str.split("_")
            return capitalize(first) + " " + capitalize(second)
        }
        return capitalize(str)
    }

    const handleOpen = (value) => {
        console.log(value, open);
        setOpen(open === value ? 0 : value)
    };

    const getNutrients = (food) => {
        let nutrients = []
        console.log(food)

        for(const entry in food) {
            if(entry !== "name" && food[entry] !== 0 || entry === "calories") {
                nutrients.push({[entry]: food[entry]})
            }
        }

        return nutrients
    }

    const getTotalLengthSoFar = (mealIndex) => {
        let totalLengthSoFar = 0;
        for(let i = 0; i < mealIndex; i++) {totalLengthSoFar += meals[mealNames[i]].fooditems.length}
        console.log(totalLengthSoFar)
        return totalLengthSoFar
    }

    const deleteFood = (foodName)=>{
        if (!localStorage.getItem("username")){
            return
        }
        fetch(DELETE_FOOD_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": localStorage.getItem("username"),
                "name": foodName,
            }),
        })
         .then(response => {
             if(response.ok) { response.json().then(() => {
             })}
         });
    }

    return (
    <>
        {(meals != undefined) && 
        <div className="w-[80vw]">
            {mealNames.map((mealName, mi) => {
                    console.log(meals[mealName])
                    return (
                        <div id={mealName} key={mi} className="pb-8">
                            <div className="flex justify-between pb-4">
                                <h1 className="text-4xl ">{capitalize(mealName)}</h1>
                                <Button color="red">Delete</Button>
                            </div>
                            {meals[mealName].fooditems.map((food, fi) => {
                                    const nutrients = getNutrients(food)
                                    const totalLengthSoFar = getTotalLengthSoFar(mi)
                                    return (<Accordion key={fi} open={open === totalLengthSoFar + fi + 1 }
                                            className="mb-2 rounded-lg border border-blue-gray-100 px-4 bg-blue-gray-100 bg-opacity-50">
                                                <AccordionHeader onClick={(e) => {console.log(e); handleOpen(totalLengthSoFar + fi + 1)}}
                                                className={`border-b-2 transition-all ${
                                                    open === totalLengthSoFar + fi + 1 ? "text-blue-500 hover:!text-blue-700" : "!border-b-0"
                                                  }`}>{capitalize(food.name)}</AccordionHeader>
                                                <AccordionBody className="bg-yellow-400 rounded-b-lg mb-4">
                                                    {nutrients.map((nutrient, ni) => {
                                                            return (
                                                                <div key={ni} className="w-full flex items-center justify-between px-10">
                                                                    <h1>{humanize(Object.keys(nutrient)[0])}</h1>
                                                                    <h1>{nutrient[Object.keys(nutrient)[0]]}</h1>
                                                                </div>
                                                            )
                                                    })}
                                                    <div className="w-full flex items-center justify-center">
                                                        <Button onClick={() => deleteFood(food.name)}color="red">Delete</Button>
                                                    </div>
                                                </AccordionBody>
                                            </Accordion>)
                            })}
                        </div>
                    )  
                })}
        </div>}
    </>);
}