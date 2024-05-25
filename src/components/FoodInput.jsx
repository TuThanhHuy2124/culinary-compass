import { CustomInput } from "./CustomInput"

export function FoodInput(props){
    return <div className="flex justify-center items-center py-1">
                <div className="mx-4 ">{props.name}</div>
                <div><CustomInput id={props.id}></CustomInput></div>
     </div>
}