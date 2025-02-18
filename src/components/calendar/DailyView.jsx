import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { DayPilotCalendar, DayPilotNavigator } from '@daypilot/daypilot-lite-react';
import './DailyView.css';

function DailyView() {
    const [events, setEvents] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    // configs for calendar views
    // modes are: Day, Week, WorkWeek, Days (custom number), Resources
    const dayConfig = {
        viewType: "Day",
        durationBarVisible: false,
    }

    const today = new Date();

    useEffect(() => {
        const events = [
            {
                id: 1,
                text: "AM Routine",
                start: today.setUTCHours(5, 30, 0, 0).toString(),
                end: today.setUTCHours(6, 30, 0, 0).toString(),
                participants: 2,
                backColor: 'hsl(0, 75%, 80%)'
            },
            {
                id: 2,
                text: "Exercise",
                start: today.setUTCHours(6, 30, 0, 0).toString(),
                end: today.setUTCHours(7, 30, 0, 0).toString(),
                participants: 2,
                backColor: 'hsl(30, 75%, 80%)'
            },
            {
                id: 3,
                text: "Get Ready",
                start: today.setUTCHours(7, 30, 0, 0).toString(),
                end: today.setUTCHours(8, 0, 0, 0).toString(),
                participants: 2,
                backColor: 'hsl(0, 0%, 80%)'
            },
            {
                id: 4,
                text: "Focus",
                start: today.setUTCHours(8, 0, 0, 0).toString(),
                end: today.setUTCHours(11, 0, 0, 0).toString(),
                participants: 2,
                backColor: 'hsl(60, 75%, 80%)'
            },
            {
                id: 5,
                text: "Lunch",
                start: today.setUTCHours(11, 0, 0, 0).toString(),
                end: today.setUTCHours(12, 0, 0, 0).toString(),
                participants: 2,
                backColor: 'hsl(200, 75%, 80%)'
            },
            {
                id: 6,
                text: "Focus",
                start: today.setUTCHours(12, 0, 0, 0).toString(),
                end: today.setUTCHours(15, 0, 0, 0).toString(),
                participants: 2,
                backColor: 'hsl(60, 75%, 80%)'
            },
            {
                id: 6,
                text: "Snack",
                start: today.setUTCHours(15, 0, 0, 0).toString(),
                end: today.setUTCHours(15, 30, 0, 0).toString(),
                participants: 2,
                backColor: 'hsl(200, 75%, 80%)'
            },
            {
                id: 7,
                text: "Hobby",
                start: today.setUTCHours(16, 0, 0, 0).toString(),
                end: today.setUTCHours(17, 0, 0, 0).toString(),
                participants: 2,
                backColor: 'hsl(170, 75%, 80%)'
            },
            {
                id: 8,
                text: "Dinner",
                start: today.setUTCHours(17, 30, 0, 0).toString(),
                end: today.setUTCHours(18, 30, 0, 0).toString(),
                participants: 2,
                backColor: 'hsl(200, 75%, 80%)'
            },
            {
                id: 8,
                text: "PM Routine",
                start: today.setUTCHours(20, 0, 0, 0).toString(),
                end: today.setUTCHours(21, 0, 0, 0).toString(),
                participants: 2,
                backColor: 'hsl(260, 75%, 80%)'
            },
        ];
        setEvents(events);
    }, []);


    return (
        <>
            <div>
                <h2>Daily View</h2>
                <DayPilotCalendar {...dayConfig} events={events} />
            </div>
        </>
    )
}

export default DailyView