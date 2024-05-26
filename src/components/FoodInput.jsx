import { CustomInput } from "./CustomInput"

export function FoodInput(props){
    return  <div className="flex justify-between items-center py-1">
                <div className="w-full bg-white bg-opacity-50 rounded-lg"><CustomInput name={props.name} id={props.id}></CustomInput></div>
            </div>
}