import { CustomInput } from "./CustomInput";
import { FoodInput } from "./FoodInput";

export default function FoodDetail(){
    return (
        <div className="flex flex-col justify-center w-2/3 border-4 p-4 border-gray rounded-xl">
            <p>Name of Food:</p>
            <CustomInput name="Ex: Pizza"/><br/>
            <p>Macronutrients Values:</p>
            <FoodInput name="Calories:"></FoodInput>
            <FoodInput name="Carbohydrates:"></FoodInput>
            <FoodInput name="Protein:"></FoodInput>
            <FoodInput name="Fat:"></FoodInput>
            <p>Macronutrients Values:</p>
            <div className="flex justify-center items-center py-1">
                <div className="mx-4 ">Calories: </div>
                <div><CustomInput></CustomInput></div>
            </div>
            <div className="flex justify-center items-center py-1">
                <div className="mx-4">Carbohydrate: </div>
                <div><CustomInput></CustomInput></div>
            </div>
            <div className="flex justify-center items-center py-1">
                <div className="mx-4">Protein: </div>
                <div><CustomInput></CustomInput></div>
            </div>
            <div className="flex justify-center items-center py-1">
                <div className="mx-4">Fat: </div>
                <div><CustomInput></CustomInput></div>
            </div>

        </div>
    );
}