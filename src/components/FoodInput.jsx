import { CustomInput } from "./CustomInput"

export function FoodInput({ id, name, value, onChange }){
    return  <div className="flex justify-between items-center py-1">
                <div className="w-full bg-white bg-opacity-50 rounded-lg"><CustomInput name={name} id={id} value={value} onChange={onChange}></CustomInput></div>
            </div>
}