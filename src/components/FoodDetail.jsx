import { CustomInput } from "./CustomInput";
import { FoodInput } from "./FoodInput";
import { LinkButton } from "./LinkButton";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

export default function FoodDetail(props){
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
    
    
    

    return (
        <div className="flex flex-col justify-center w-[45vw] p-4 rounded-xl bg-blue-gray-100 bg-opacity-75 shadow-xl">
            <div className="bg-white bg-opacity-50 h-fit rounded-lg mb-4">
                <Input id="name" label="Name of Food"></Input>
            </div>
            <div id="nutrients" className="overflow-auto max-h-[30vh]">
                <p>Macronutrients Values:</p>
                {macro.map((nutrient, i) => (
                    <>
                    <FoodInput id={nutrient} key={i} name={nutrient + ` ${nutrient === "Calorie" ? "(cal)" : "(g)"}`}></FoodInput>
                    </>
                ))}
                <p>Miscellaneous Values</p>
                {misc.map((nutrient, i) => (
                    <>
                    <FoodInput id={nutrient} key={i} name={nutrient + " (g)"}></FoodInput>
                    </>
                ))}
                <p>Micronutrients Values:</p>
                {micro.map((nutrient, i) => (
                    <>
                    <FoodInput id={nutrient} key={i} name={nutrient + " (g)"}></FoodInput>
                    </>
                ))}
            </div>
            
        </div>
    );
}