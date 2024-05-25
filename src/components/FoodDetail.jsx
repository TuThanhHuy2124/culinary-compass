import { CustomInput } from "./CustomInput";
import { FoodInput } from "./FoodInput";


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
    return (
        <div className="flex flex-col justify-center w-2/3 border-4 p-4 border-gray rounded-xl bg-[#DCDDFF] bg-opacity-75">
            <CustomInput name="Name of Food"/><br/>
            <div className="overflow-auto max-h-[30vh]">
                <p>Macronutrients Values:</p>
                {macro.map((nutrient, i) => (
                    <>
                    <FoodInput key={i} name={nutrient + ` ${nutrient === "Calorie" ? "(cal)" : "(g)"}:`}></FoodInput>
                    </>
                ))}
                <p>Miscellaneous Values</p>
                {misc.map((nutrient, i) => (
                    <>
                    <FoodInput key={i} name={nutrient + " (g):"}></FoodInput>
                    </>
                ))}
                <p>Micronutrients Values:</p>
                {micro.map((nutrient, i) => (
                    <>
                    <FoodInput key={i} name={nutrient + " (g):"}></FoodInput>
                    </>
                ))}
            </div>
        </div>
    );
}