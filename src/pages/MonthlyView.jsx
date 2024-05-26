import { useState, useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import interationPlugin from '@fullcalendar/interaction';
import tippy from "tippy.js";
import 'tippy.js/themes/translucent.css';
import 'tippy.js/dist/tippy.css';
import './Calendar.css';
import Spinner from "../components/Spinner";

export default function MonthlyView () {
    const BASE_URL = 'http://localhost:5173'
    const CALENDER_API = "https://culinarycompassapi.onrender.com/month";
    const DAY_URL = "http://localhost:5173/day?"
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [events, setEvents] = useState([]);
    const [month, setMonth] = useState(null);

    const queryToDate = (str) => {
        const [, date] = str.split("=")
        return date
    }

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
                if(response.ok) { response.json().then(data => {
                    console.log(data)
                    var allEvents = []
                    for (const date in data) {
                        for(const meal of data[date]) {
                            for(const mealName in meal) {
                                var currentEvent = {title: mealName, date: date, url: DAY_URL + "date=" + date};
                                allEvents.push(currentEvent);
                            }
                        }
                    }
                    console.log("here:")
                    console.log(data)
                    setData(data)
                    setEvents(allEvents)
                })}
                setLoading(false)
            });
        }
        get_data();
    }, [month]);

    const dateMealToFood = (date, mealName) => {
        for(const meal of data[date]) {
            for(const meal_name in meal) {
                console.log(meal_name)
                if(meal_name === mealName) 
                    {return meal[mealName]}}
        }
    }

    const setCurrentMonth = (arg) =>{
        if (arg.view == undefined) {return;}
        const curr_month = arg.view.currentStart.getMonth()+1
        setMonth(curr_month);
    }

    const generatePopover = (arr) => {
        let result = ""
        for(const item of arr) {
            result += `<h3>${item}</h3><br/>`
        }
        return result
    }

    return (
    <>
    {loading ? <Spinner/> :
    <div id="month-view-display" className="relative min-h-[var(--min-display)] bg-circle-pattern bg-cover bg-center p-auto flex">
        <div className="w-[80%] max-w-[680px] h-auto bg-gray-100 bg-opacity-95 m-auto p-5 rounded-lg">
            <FullCalendar
            datesSet={(arg)=>{setCurrentMonth(arg)}}
            plugins={[ dayGridPlugin, timeGridPlugin, interationPlugin ]}
            initialView="dayGridMonth"
            headerToolbar={{
                start: "today",
                center: "title",
                end: "prev,next",
            }}
            dateClick={(info) => {
                console.log(info)
                console.log(BASE_URL + new URLSearchParams({date: info.dateStr}).toString())
                window.location.href = BASE_URL + "/plan?" + new URLSearchParams({date: info.dateStr}).toString()
            }}
            events={events}
            dayMaxEventRows={4}
            eventDidMount={ (info) => {
                console.log(events)
                const foodItems = dateMealToFood(queryToDate(info.event._def.url), info.event._def.title)
                console.log(foodItems);
                tippy(info.el, {
                    trigger: 'mouseenter focus',
                    touch: 'hold',
                    allowHTML: true,
                    content:
                    `${generatePopover(foodItems)}`,
                    theme: 'translucent',
                    arrow: true,
                });
            }}/>
        </div>
    </div>}
    </>
    )
}