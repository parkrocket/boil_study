import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Head from "../../components/Head";

function Calendar2() {
    return (
        <div>
            <Head></Head>
            <div className="container_wrap">
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={[
                        { title: "happy birthday1", start: "2023-06-10", end: "2023-06-16" },
                        { title: "소리질러", start: "2023-06-07", end: "2023-06-13" },
                    ]}
                />
            </div>
        </div>
    );
}

export default Calendar2;
