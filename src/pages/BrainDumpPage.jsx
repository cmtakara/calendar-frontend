import { useEffect, useState } from 'react';
import axios from 'axios';

function BrainDumpPage() {
    const current = new Date();
    // const currDate = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
    const [entries, setEntries] = useState([]);
    const [ formData, setFormData ] = useState({
        entryDate: current,
        entryType: '',
        description: ''
    })
    const [ entryUpdate, setEntryUpdate ] = useState('nothing changed');
    const [ entType, setEntType ] = useState('');

    const LOCAL_URL = 'http://localhost:5050';
    const DEPLOY_URL = 'https://calendar-backend-76zw.onrender.com';

    const getEntries = async () => {
        console.log('in getEntries');
        // fetch brain dump entries from the backend
        //      also know as the api that i am creating
        //  this endpoint is:
        //      /api/braindump
        try {
            // const response = await axios.get(`${LOCAL_URL}/api/braindump`);
            const response = await axios.get(`${DEPLOY_URL}/api/braindump`);
            console.log(response.data);
            setEntries(response.data);
        } catch (err) {
            console.err(err);
        }
    }

    const addEntry = async (newEntry) => {
        let error = false;
        let addedEntry = {};
        try {
            // const response = await axios.post(`${LOCAL_URL}/api/braindump`, newEntry);
            const response = await axios.post(`${DEPLOY_URL}/api/braindump`, newEntry);
            addedEntry = response.data;
        } catch (e) {
            error = true;
            console.error(e);
        } finally {
            // lets the user know whether the add was successful or not
            if (error) {
                setEntryUpdate('there was an error')
            } else {
                // once i actually implement the post route in my backend, i will show the added entry
                setEntryUpdate(`successfully added: ${addedEntry.entryType} - ${addedEntry.description} - id: ${addedEntry._id}`)
            }
        }
    }

    const deleteEntry = async (id) => {
        try {
            // const response = await axios.delete(`${LOCAL_URL}/api/braindump/${id}`);
            const response = await axios.delete(`${DEPLOY_URL}/api/braindump/${id}`);
            console.log(response);
            setEntryUpdate(`deleted entry ${id} successfully`)
        } catch (err) {
            console.error(err);
            setEntryUpdate('delete failed')
        }
    }

    // const editEntry = async () => {
    //     try {
    //         const response = await axios.put(`${LOCAL_URL}/api/braindump/${id}`)
    //     } catch (err) {
    //         console.error(err);
    //         setEntryUpdate('edit failed');
    //     }
    // }

    const handleEdit = (e, id) => {
        console.log('editing... entry: ')
        // add in a function editEntry()
        console.log(id)
        console.log(e)
    }

    const handleDelete = (e, id) => {
        console.log(`deleting entry: `)
        // add in a function deleteEntry()
        deleteEntry(id);
        console.log(id)
        console.log(e)
    }

    useEffect(() => {
        getEntries();
    }, [entryUpdate]);

    const loaded = () => {

        return (
            <ul style={{ listStyleType: 'none', display: "flex", flexDirection: 'column' }}>
                {entries.map((entry) => {
                    return (
                        <li key={entry._id} style={{ width: '80%' }}>{entry.entryDate}: {entry.entryType}: {entry.description}
                        <button onClick={(e) => {handleEdit(e, entry._id)}}>edit</button>
                        <button onClick={(e) => {handleDelete(e, entry._id)}}>delete</button>
                        </li>
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

    const handleSubmit = e => {
        e.preventDefault();
        let newEntry = {};
        console.log('in handleSubmit')
        console.log(entType)
        // this is where I will send my post request to the backend
        console.log(formData);
        newEntry = {
            entryDate: formData.entryDate,
            entryType: entType || 'None',
            description: formData.description
        }
        console.log(newEntry)
        addEntry(newEntry);
    }

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleTypeSelect = e => {
        setEntType(e.target.value);
    }

    return (
        <>
            <h2>Brain Dump Entries</h2>
            <ol> CRUD
                <li>Update - form to edit a specific entry</li>
                <li>Delete - button to delete an entry</li>
            </ol>
            <div style={{display: 'flex'}}>
                <div>
                    <h3>Add a new entry</h3>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='date'
                            name='entryDate'
                            required
                            onChange={handleChange}
                            value={formData.entryDate}
                        />
                        <label>Choose the Entry Type
                            <select value={entType} onChange={handleTypeSelect}>
                                <option value="None"> </option>
                                <option value="ToDo">To Do</option>
                                <option value="Idea">Idea</option>
                                <option value="Appt">Appt</option>
                                <option value="Sched">Sched</option>
                                <option value="List">List</option>
                            </select>
                        </label>
                        <input 
                            type='text'
                            name='description'
                            required
                            onChange={handleChange}
                            value={formData.description}
                        />
                        <input 
                            type='submit'
                            value='add a new entry'
                        />
                    </form>
                    <p>{entryUpdate}</p>
                </div>
                <div>
                    {entries.length ? loaded() : loading()}
                </div>
            </div>

        </>
    )
}

export default BrainDumpPage