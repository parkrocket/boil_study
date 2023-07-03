import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
import Head from "../../components/Head";
import mement from "moment";
import "./calendar.scss";
import moment from "moment";

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div className="header row">
            <div className="col col-start">
                <span className="text">
                    <span className="text month">{format(currentMonth, "M")}월</span>
                    {format(currentMonth, "yyyy")}
                </span>
            </div>
            <div className="col col-end">
                <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
                <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
            </div>
        </div>
    );
};

const RenderDays = () => {
    const days = [];
    const date = ["일", "월", "화", "수", "목", "금", "토"];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>
        );
    }

    return <div className="days row">{days}</div>;
};

const RenderCells = ({ currentMonth, selectedDate, event, onDateClick }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const cYear = mement(monthStart).year();
    const cMonth = mement(monthStart).format("MM");
    let eArray = [];

    const ppp = event.filter((events) => events.date.substr(0, 7) === `${cYear}-${cMonth}`);

    console.log(ppp);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    let mformattedDate = "";
    let tEvent = [];

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, "d");
            mformattedDate = moment(day).format("DD");
            const cloneDay = day;

            tEvent = ppp.filter((events) => events.date === `${cYear}-${cMonth}-${mformattedDate}`);
            console.log(tEvent[0]);
            days.push(
                <div
                    className={`col cell ${
                        !isSameMonth(day, monthStart)
                            ? "disabled"
                            : isSameDay(day, selectedDate)
                            ? "selected"
                            : format(currentMonth, "M") !== format(day, "M")
                            ? "not-valid"
                            : "valid"
                    }`}
                    key={day}
                    onClick={() => onDateClick(parse(cloneDay))}>
                    <span
                        className={
                            format(currentMonth, "M") !== format(day, "M") ? "text not-valid" : ""
                        }>
                        {formattedDate}

                        {tEvent[0] !== undefined ? (
                            <div className="event">{tEvent[0].name}</div>
                        ) : (
                            ""
                        )}
                    </span>
                </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
                {days}
            </div>
        );
        days = [];
    }
    return <div className="body">{rows}</div>;
};

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [event, setEvent] = useState([]);

    useEffect(() => {
        setEvent([
            { date: "2023-05-01", name: "5월첫날" },
            { date: "2023-06-10", name: "박성현탄생일" },
            { date: "2023-06-22", name: "오늘" },
            { date: "2023-07-11", name: "다음달" },
        ]);
    }, []);

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const onDateClick = (day) => {
        setSelectedDate(day);
    };
    return (
        <div>
            <Head></Head>
            <div className="container_wrap">
                <div className="calendar">
                    <RenderHeader
                        currentMonth={currentMonth}
                        prevMonth={prevMonth}
                        nextMonth={nextMonth}
                    />
                    <RenderDays />
                    <RenderCells
                        currentMonth={currentMonth}
                        selectedDate={selectedDate}
                        event={event}
                        onDateClick={onDateClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default Calendar;
