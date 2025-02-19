import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';
import { DayPilotCalendar } from '@daypilot/daypilot-lite-react';

function CalendarPage() {
    const [events, setEvents] = useState([]);
    const [calEvents, setCalEvents] = useState([]);
    const [update, setUpdate] = useState(true);
    const { user } = useContext(UserContext);
    const LOCAL_URL = 'http://localhost:5050';
    const DEPLOY_URL = 'https://calendar-backend-76zw.onrender.com';

    // configs for calendar views
    // modes are: Day, Week, WorkWeek, Days (custom number), Resources
    const dayConfig = {
        viewType: "Day",
        durationBarVisible: false,
    }
// let viewSelect = 'Day';
//     const config = {
//         viewType: viewSelect,
//         durationBarVisible: false,
//     }

    const today = new Date();
    const getEvents = async () => {
        console.log('in getEntries');
        // fetch calendar entries from the backend
        //      also know as the api that i am creating
        //  this endpoint is:
        //      /api/calendar
        try {
            // const response = await axios.get(`${LOCAL_URL}/api/calendar`);
            const response = await axios.get(`${DEPLOY_URL}/api/calendar`);
            console.log(response.data);
            setCalEvents(updateFields(response.data));
            setEvents(response.data);
        } catch (err) {
            console.error(err);
        }
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
            const newEvent = {}
            newEvent.id = event._id;
            newEvent.text = event.label;
            newEvent.start = parseTime(today)
            newEvent.end = parseTime(today);
            console.log(newEvent);
            newEvents.push(newEvent);
        })
        return newEvents;
    }

    function parseTime(time) {
        // format yyy-mm-ddThh:mm:ss
        let stringDateTime = '';
        let month = time.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        let date = time.getDate();
        if (date < 10) {
            date = '0' + date;
        }
        let stringDate = time.getFullYear() + '-' + month + '-' + time.getDate();
        let hours = time.getHours();
        if (hours < 10) {
            hours = '0'+ hours;
        }
        let minutes = time.getMinutes();
        if (minutes < 10) {
            hours = '0' + minutes;
        }
        let seconds = time.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        let stringTime = hours+':'+minutes+':'+seconds;
        stringDateTime = stringDate + 'T' + stringTime;
        return stringDateTime;
    }

    useEffect(() => {
        getEvents();
    }, []);

    const loaded = () => {

        return (
            <>
            <div>
                <h2>Day View</h2>
                <DayPilotCalendar {...dayConfig} events={calEvents} />
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