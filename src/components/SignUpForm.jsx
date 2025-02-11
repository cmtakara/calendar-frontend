import { useState } from 'react';
// adding in auth, I am importing SignUp from utilities
import { signUp } from '../utilities/users-services';

function SignUpForm(props) {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })
    const [ error, setError ] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
        setError('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // this is where we will eventually add this to our database
        //  but through utilities/users-services (so I'm making util functions to handle api calls)
        try {
            // set this up to be able to add a new user
            const submitData = { ... formData };
            delete submitData.confirm;
            console.log(submitData);
            const user = await signUp(submitData);
            props.setUser(user)
        } catch (e) {
                setError('Sign Up Failed - Try Again')
        }

    }

  return (
    <>
    <h2>Sign Up to start using your own calendar</h2>
    <div>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <label>Display Name: </label>
            <input 
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Display Name'
                required
            />
            <br />
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
            <label>Confirm Your Password</label>
            <input 
                type='password'
                name='confirm'
                value={formData.confirm}
                onChange={handleChange}
                placeholder='must match password'
                required
            />
            <br />
            <button type='submit' disabled={formData.password !== formData.confirm}>SIGN UP now</button>
        </form>
        <p>{error}</p>
    </div>
    </>
  )
}

export default SignUpForm