import { CustomInput } from "./CustomInput"

export function FoodInput(props){
    return <div className="flex justify-between items-center py-1">
                <div className="w-fit mx-4 ">{props.name}</div>
                <div className="w-full"><CustomInput id={props.id}></CustomInput></div>
     </div>
}