import { useState } from "react";

export default function MealList(props){
    return (
        <div style={{maxWidth: 50+"%"}} className="flex flex-col justify-center w-[45vw] p-4 rounded-xl bg-blue-gray-100 bg-opacity-75">
            {props.fooditems != undefined && props.fooditems.map((fooditem, i) => {
                 return <p>{i+1}. {fooditem}</p>
            })}
        </div>
    )
}