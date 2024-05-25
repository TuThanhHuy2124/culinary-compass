import { CustomInput } from "./CustomInput";
import { FoodInput } from "./FoodInput";
import { LinkButton } from "./LinkButton";
import { Button } from "@material-tailwind/react";

export default function FoodDetail(){
    const macro = [
        "Calorie",
        "Protein",
        "Fat",
        "Carbs",
    ] 

    const misc = [
        "Fiber",
        "Sodium",
        "Cholesterol",
    ] 

    const micro = [
        "Vitamin A",
        "Vitamin B1",
        "Vitamin B2",
        "Vitamin B3",
        "Vitamin B5",
        "Vitamin B6",
        "Vitamin B9",
        "Vitamin B12",
        "Vitamin C",
        "Vitamin D",
        "Vitamin E",
        "Zinc",
        "Potassium",
        "Magnesium",
        "Calcium",
        "Iron",
        "Selenium",
    ]
    
    const INSERT_FOOD_API = "https://culinarycompassapi.onrender.com/create/food_item/"
    const addFood = async () => {
        var nutrients = new Object();
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
            if(response.ok) {console.log("Success!");}
        });
        console.log(nutrients);
    }

    return (
        <div className="flex flex-col justify-center w-2/3 border-4 p-4 border-gray rounded-xl bg-[#DCDDFF] bg-opacity-75">
            <CustomInput id="name" name="Name of Food"/><br/>
            <div id="nutrients" className="overflow-auto max-h-[30vh]">
                <p>Macronutrients Values:</p>
                {macro.map((nutrient, i) => (
                    <>
                    <FoodInput id={nutrient} key={i} name={nutrient + ` ${nutrient === "Calorie" ? "(cal)" : "(g)"}:`}></FoodInput>
                    </>
                ))}
                <p>Miscellaneous Values</p>
                {misc.map((nutrient, i) => (
                    <>
                    <FoodInput id={nutrient} key={i} name={nutrient + " (g):"}></FoodInput>
                    </>
                ))}
                <p>Micronutrients Values:</p>
                {micro.map((nutrient, i) => (
                    <>
                    <FoodInput id={nutrient} key={i} name={nutrient + " (g):"}></FoodInput>
                    </>
                ))}
            </div>
            <Button onClick={addFood} className="!bg-yellow-400 !text-blue-800">Add Food</Button>
        </div>
    );
}