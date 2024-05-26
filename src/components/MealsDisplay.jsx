import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

export default function MealsDisplay ({ title, meals, mealTitles }) {
    const [open, setOpen] = useState(0);
    console.log(meals)
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (<>
        {(meals != undefined) && 
        <div className="w-[80vw] ">
            {
                meals.map((meal, mi) => {
                    const mealTitle = Object.keys(meal)[0];
                    return (
                        <div id={mealTitle}key={mi}>
                            <h1 className="text-4xl">{mealTitle}</h1>
                            {
                                meal[mealTitle].map((food, fi) => {
                                    console.log(food)
                                    const overallIndex = mi * meals.length + fi;
                                    return (<Accordion key={fi} open={open === overallIndex + 1}
                                            className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                                                <AccordionHeader onClick={() => handleOpen(overallIndex + 1)}
                                                className={`border-b-2 transition-all ${
                                                    open === overallIndex + 1 ? "text-blue-500 hover:!text-blue-700" : "!border-b-0"
                                                  }`}>{food}</AccordionHeader>
                                                <AccordionBody className="bg-yellow-400 rounded-b-lg mb-4">Hello</AccordionBody>
                                            </Accordion>)
                                    })
                            }
                        </div>
                    )
                    
                })
            }
        </div>}
    </>);
}