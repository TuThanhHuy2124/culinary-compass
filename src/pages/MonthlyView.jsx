import { useState, useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import interationPlugin from '@fullcalendar/interaction';
import tippy from "tippy.js";
import 'tippy.js/themes/translucent.css';
import 'tippy.js/dist/tippy.css';
import './Calendar.css';

export default function MonthlyView () {
    const BASE_URL = 'http://localhost:5173'
    const CALENDER_API = "https://culinarycompassapi.onrender.com/month";
    const DAY_URL = "http://localhost:5173/day?"
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
                    var allMeals = []
                    for (var meal in meals){
                        var current_meal = {title: meal, date: meals[meal]["date"], url: DAY_URL + "date=" + meals[meal]["date"]};
                        allMeals.push(current_meal);
                    }

                    setData(allMeals);
                })}
            });
        }
        get_data();
    }, [month]);

    const setCurrentMonth = (arg) =>{
        if (arg.view == undefined) {return;}
        const curr_month = arg.view.currentStart.getMonth()+1
        setMonth(curr_month);
    }

    return (
    <div id="month-view-display" className="relative min-h-[var(--min-display)] bg-circle-pattern bg-cover bg-center p-auto">
        <div className="w-[80%] max-w-[680px] h-auto bg-gray-200 bg-opacity-50 m-auto p-5 rounded-[100px]">
            <FullCalendar
            datesSet={(arg)=>{setCurrentMonth(arg)}}
            plugins={[ dayGridPlugin, timeGridPlugin, interationPlugin ]}
            initialView="dayGridMonth"
            headerToolbar={{
                start: "today prev,next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            dateClick={(info) => {
                console.log(info)
                console.log(BASE_URL + new URLSearchParams({date: info.dateStr}).toString())
                window.location.href = BASE_URL + "/plan?" + new URLSearchParams({date: info.dateStr}).toString()
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
    </div>
    )
}