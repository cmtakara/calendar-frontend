import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';
import { DayPilotCalendar, DayPilotNavigator } from '@daypilot/daypilot-lite-react';
import * as calendarServices from '../utilities/calendar-services';

function CalendarPage() {
    const [events, setEvents] = useState([]);
    const [calEvents, setCalEvents] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [update, setUpdate] = useState(true);
    const contextValue = useContext(UserContext);
    
    // configs for calendar views
    // modes are: Day, Week, WorkWeek, Days (custom number), Resources
    const dayConfig = {
        viewType: "Day",
        durationBarVisible: false,
    }

    function handleTimeRangeSelection(args) {
        console.log(args.day)
        setStartDate(args.day);
    }


    // TODO: update to choose view
// let viewSelect = 'Day';
//     const config = {
//         viewType: viewSelect,
//         durationBarVisible: false,
//     }

    const today = new Date();
    const getEvents = async (userId) => {
        // console.log('in getEntries');
        const entries = await calendarServices.getUserEntries(userId);
        setCalEvents(updateFields(entries));
        setEvents(entries);

    }


    // for day
    // {
    //     id: 1,
    //     text: "AM Routine",
    //     start: today.setUTCHours(5, 30, 0, 0).toString(),
    //     end: today.setUTCHours(6, 30, 0, 0).toString(),
    //     participants: 2,
    //     backColor: 'hsl(0, 75%, 80%)'
    // },
// this is temporary - until i update the backend to match the calendar
// ! fix this
    function updateFields (events) {
        const newEvents = [];
        let startTime = new Date();
        let time = 10;
        events.forEach((event) => {
            const newEvent = {...event}
            newEvent.id = event._id;
            if (typeof event.start != 'string') { newEvent.start = calendarServices.parseTime(event.start)}
            if (typeof event.end != 'string') {newEvent.end = calendarServices.parseTime(event.end)}
            // console.log(newEvent);
            newEvents.push(newEvent);
        })
        return newEvents;
    }

    // function parseTime(time) {
    //     // format yyy-mm-ddThh:mm:ss
    //     console.log(time)
    //     let stringDateTime = '';
    //     let month = time.getMonth() + 1;
    //     if (month < 10) {
    //         month = '0' + month;
    //     }
    //     let date = time.getDate();
    //     if (date < 10) {
    //         date = '0' + date;
    //     }
    //     let stringDate = time.getFullYear() + '-' + month + '-' + time.getDate();
    //     let hours = time.getHours();
    //     if (hours < 10) {
    //         hours = '0'+ hours;
    //     }
    //     let minutes = time.getMinutes();
    //     if (minutes < 10) {
    //         hours = '0' + minutes;
    //     }
    //     let seconds = time.getSeconds();
    //     if (seconds < 10) {
    //         seconds = '0' + seconds;
    //     }
    //     let stringTime = hours+':'+minutes+':'+seconds;
    //     stringDateTime = stringDate + 'T' + stringTime;
    //     return stringDateTime;
    // }

    useEffect(() => {
        getEvents(contextValue.user._id);
    }, [contextValue]);

    const handleTodayClick = () => {
        setStartDate(new Date());
    }

    const loaded = () => {

        return (
            <>
            <div>
                <h2>Day View</h2>
                <div style={{ display: 'flex' }}>
                <div style={{marginRight: '10px'}}>
                    <button onClick = {handleTodayClick}>Today</button>
                        <DayPilotNavigator
                            selectMode={"day"}
                            showMonths={3}
                            skipMonths={3}
                            selectionDay={startDate}
                            onTimeRangeSelected={handleTimeRangeSelection}
                        />
                    </div>
                    <div style={{flexGrow: '1'}}>
                        <DayPilotCalendar
                            {...dayConfig}
                            events={calEvents}
                            startDate={startDate}
                        />
                    </div>

                    </div>
            </div>
        </>
        )
    }

    const loading = () => {
        return (
            <h3>There don't seem to be an entries yet... </h3>
        )
    }
    return (
        <>
        {calEvents.length ? loaded() : loading()}
        </>
    )
}

export default CalendarPage