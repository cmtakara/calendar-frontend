import { useState } from 'react'
import userService from '../utilities/users-services';

function LoginForm({ setUser }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [ error, setError ] = useState('');

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log(formData);
        const credentials = { ...formData }
        console.log(credentials);
        try {
            // The promise returned by the login service method will resolve to the user
            // object inclues in the payload of the JWT 
            const user = await userService.login(credentials);
            console.log(user)
            setUser(user);
        } catch (err) {
            setError('Log In Failed - Try Again')
        }
    }

    return (
        <>
            <h2>Log in to see your calendar</h2>
            <div>
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <label>Email Address (needs to be unique)</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='email address will be your login'
                        required
                    />
                    <br />
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='password'
                        required
                    />
                    <br />
                    <button type='submit'>login</button>
                </form>
                <p>{error}</p>
            </div>
        </>
    )
}

export default LoginForm