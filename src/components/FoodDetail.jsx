import { CustomInput } from "./CustomInput";
import { FoodInput } from "./FoodInput";
import { LinkButton } from "./LinkButton";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

export default function FoodDetail({name, nutrients }){
    const macro = [
        "Calories",
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
        "Vitamin B",
        "Vitamin C",
        "Vitamin D",
        "Vitamin E",
        "Vitamin K",
        "Zinc",
        "Potassium",
        "Magnesium",
        "Calcium",
        "Iron",
        "Selenium",
    ]
    
    console.log(name, nutrients)
    const propertyFromStr = (str) => {console.log(str.toLocaleLowerCase().split(" ").join("_")); return (str.toLocaleLowerCase().split(" ").join("_"))}

    return (
        <div className="flex flex-col justify-center w-[45vw] p-4 rounded-xl bg-blue-gray-100 bg-opacity-75 shadow-xl">
            <div className="bg-white bg-opacity-50 h-fit rounded-lg mb-4">
                <Input id="name" label="Name of Food" defaultValue={nutrients !== null ? name : null}></Input>
            </div>
            <div id="nutrients" className="overflow-auto max-h-[30vh]">
                <p>Macronutrients Values:</p>
                {macro.map((nutrient, i) => {
                    console.log(nutrients)
                    if(nutrients !== undefined && nutrients !== null) {
                        console.log(nutrients)
                        console.log(nutrient.toLocaleLowerCase())
                        console.log(Object.prototype.hasOwnProperty.call(nutrients, nutrient.toLocaleLowerCase()))
                    }
                    return (
                        <>
                        <FoodInput id={nutrient} key={i} 
                                   name={nutrient + ` ${nutrient === "Calorie" ? "(cal)" : "(g)"}`} 
                                   value={nutrients !== undefined && nutrients !== null && 
                                   Object.prototype.hasOwnProperty.call(nutrients, nutrient.toLocaleLowerCase()) ? 
                                   nutrients[nutrient.toLocaleLowerCase()] : ""}></FoodInput>
                        </>
                    )
                })}
                <p>Miscellaneous Values</p>
                {misc.map((nutrient, i) => {
                return (
                    <>
                    <FoodInput id={nutrient} key={i} 
                               name={nutrient + " (g)"}
                               value={nutrients !== undefined && nutrients !== null && 
                               Object.prototype.hasOwnProperty.call(nutrients, nutrient.toLocaleLowerCase()) ? 
                               nutrients[nutrient.toLocaleLowerCase()] : ""}></FoodInput>
                    </>
                )})}
                <p>Micronutrients Values:</p>
                {micro.map((nutrient, i) => (
                    <>
                    <FoodInput id={nutrient} key={i} 
                               name={nutrient + " (g)"}
                               value={nutrients !== undefined && nutrients !== null && 
                               Object.prototype.hasOwnProperty.call(nutrients, propertyFromStr(nutrient)) ? 
                               nutrients[propertyFromStr(nutrient)] : ""}></FoodInput>
                    </>
                ))}
            </div>
            
        </div>
    );
}