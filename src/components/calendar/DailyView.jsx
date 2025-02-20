import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
import { DayPilotCalendar, DayPilotNavigator } from '@daypilot/daypilot-lite-react';
import './DailyView.css';
import UserContext from '../../contexts/UserContext'
import * as calendarServices from '../../utilities/calendar-services'



function DailyView(props) {
    const [events, setEvents] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    // const [userId, setUserId] = useState('');
    const today = new Date();
    const baseEvents = [
        {
            id: 1,
            text: "AM Routine",
            start: today.setUTCHours(5, 30, 0, 0).toString(),
            end: today.setUTCHours(6, 30, 0, 0).toString(),
            participants: 2,
            backColor: 'hsl(0, 75%, 80%)'
        },
        {
            id: 20,
            text: "meeting",
            start: today.setUTCHours(10, 0, 0, 0).toString(),
            end: today.setUTCHours(10, 30, 0, 0).toString(),
            participants: 2,
            fontColor: 'hsl(60, 75%, 20%)',
            // backColor: 'hsl(0, 0%, 80%)',
            backColor: 'hsl(60, 75%, 60%)',
            borderColor: 'hsl(60, 75%, 40%)',
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


    let demo = props.demo, contextValue;
    if (!demo) {
        contextValue = useContext(UserContext);
        // console.log('not demo')
        // console.log(contextValue.user);
        //   setUserId(user._id);
    }

    // configs for calendar views
    // modes are: Day, Week, WorkWeek, Days (custom number), Resources
    const dayConfig = {
        viewType: "Day",
        durationBarVisible: false,
    }



    useEffect(() => {
        // console.log(contextValue.user._id)
        // setUserId(contextValue.user._id);
        setUserEvents(contextValue.user._id);
    }, [contextValue])

    // useEffect(setUserEvents(), []);


    async function setUserEvents(userId) {
        if (userId) {
            // console.log('get events from db');
            setEvents(null);
            // try {
            //     const entries = await calendarServices.getAllEntries();
            //     console.log(entries);
            // } catch (e) {
            //     console.log(e);
            // }
            const entries = await calendarServices.getUserEntries(userId);
            // console.log(entries)
            // ! troubleshoot this to have routine times
            // entries.push(baseEvents);
            // entries.forEach((entry) => {
            //     if (entry.start && typeof entry.start != 'string') { entry.start = calendarServices.parseTime(entry.start) }
            //     if (entry.end && typeof entry.end != 'string') { entry.end = calendarServices.parseTime(entry.end) }
            // })
            setEvents(entries)
        }
        else {
            setEvents(baseEvents);
        }
    }
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