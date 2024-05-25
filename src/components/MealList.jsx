import { useState } from "react";

export default function MealList(props){
    return (
        <div style={{maxWidth: 50+"%"}} className="flex flex-col justify-center w-full border-4 p-4 border-gray rounded-xl bg-[#DCDDFF] bg-opacity-75">
            {props.fooditems != undefined && props.fooditems.map((fooditem, i) => {
                 return <p>{i+1}. {fooditem}</p>
            })}
        </div>
    )
}