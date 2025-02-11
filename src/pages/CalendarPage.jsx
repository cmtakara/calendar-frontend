import { useEffect, useState } from 'react';
import axios from 'axios';

function CalendarPage() {
    const [entries, setEntries] = useState([]);
    const LOCAL_URL = 'http://localhost:5050';
    const DEPLOY_URL = 'https://calendar-backend-76zw.onrender.com';

    const getEntries = async () => {
        console.log('in getEntries');
        // fetch calendar entries from the backend
        //      also know as the api that i am creating
        //  this endpoint is:
        //      /api/calendar
        try {
            // const response = await axios.get(`${LOCAL_URL}/api/calendar`);
            const response = await axios.get(`${DEPLOY_URL}/api/calendar`);
            console.log(response.data);
            setEntries(response.data);
        } catch (err) {
            console.err(err);
        }
    }

    useEffect(() => {
        getEntries();
    }, []);

    const loaded = () => {

        return (
        <ul style={{listStyleType: 'none', display: "flex", flexDirection: 'column'}}>
            {entries.map((entry) => {
                return (
                    <li style={{width: '80%'}}>{entry.startDate}: {entry.label}</li>
                )
            })}
        </ul>
        )
    }

    const loading = () => {
        return (
            <h3>There don't seem to be an entries yet... </h3>
        )
    }
    return (
        <>
            <h2>Calendar Entries</h2>
            {entries.length ? loaded() : loading()}
        </>
    )
}

export default CalendarPage