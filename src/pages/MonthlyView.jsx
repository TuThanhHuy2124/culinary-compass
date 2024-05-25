import { useState, useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import tippy from "tippy.js";
import 'tippy.js/themes/translucent.css';
import 'tippy.js/dist/tippy.css';
import './Calendar.css';




export default function MonthlyView () {
    localStorage.setItem("username", "test")
    const CALENDER_API = "https://culinarycompassapi.onrender.com/month";
    const [data, setData] = useState([]);
    const [month, setMonth] = useState(null);
    useEffect(() => {
        const get_data = async () => {
            fetch(CALENDER_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": localStorage.getItem("username"),
                    "month": month
                }),
            })
            .then(response => {
                if(response.ok) { response.json().then(meals => {
                    console.log(meals)
                    var allMeals = []
                    for (var meal in meals){
                        var current_meal = {title: meal, date: meals[meal]["date"]};
                        allMeals.push(current_meal);
                    }
                    console.log(allMeals)
                    setData(allMeals);
                })}
            });
        }
        get_data();
    }, [month]);

    const setCurrentMonth = (arg) =>{
        if (arg.view == undefined){
            return;
        }
        const curr_month = arg.view.currentStart.getMonth()+1
        setMonth(curr_month);
        
    }

    return (
    <div id="month-view-display" className="flex flex-col items-center justify-center min-h-[var(--min-display)]">
        <FullCalendar
        datesSet={(arg)=>{setCurrentMonth(arg)}}
        plugins={[ dayGridPlugin, timeGridPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={data}
        eventDidMount={ (info) => {
            console.log(info);
            tippy(info.el, {
                trigger: 'mouseenter focus',
                touch: 'hold',
                allowHTML: true,
                content:
                  `<h3>${info.event._def.title}</h3>
                  <br/>
                  <h3>${info.event._def.title}</h3>`,
                theme: 'translucent',
                arrow: true,
            });
         }}/>
    </div>
    )
}