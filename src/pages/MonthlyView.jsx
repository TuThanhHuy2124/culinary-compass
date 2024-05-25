import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import tippy from "tippy.js";
import 'tippy.js/themes/translucent.css';
import 'tippy.js/dist/tippy.css';
import './Calendar.css';

export default function MonthlyView () {
    console.log(new URLSearchParams({date: "2024-05-23"}).toString())

    return (
    <div id="month-view-display" className="flex flex-col items-center justify-center min-h-[var(--min-display)]">
        <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={[
            { title: 'Breakfast', date: '2024-05-23', url: `http://localhost:5173/day?${new URLSearchParams({date: "2024-05-23", start: "side"}).toString()}` },
            { title: 'Lunch', date: '2024-05-23' },
            { title: 'Dinner', date: '2024-05-23', url: 'https://www.google.com' },
            { title: 'Side', date: '2024-05-23' },
        ]}
        eventDidMount={ (info) => {
            console.log(info.event._def.title);
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