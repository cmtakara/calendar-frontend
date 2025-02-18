import { Routes, Route, Link } from 'react-router';
import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import BrainDumpPage from './pages/BrainDumpPage';
import CalendarPage from './pages/CalendarPage';
import TodoPage from './pages/TodoPage';
import Welcome from './pages/Welcome';
import Nav from './components/Nav';
import './App.css'
import { getUser } from './utilities/users-services';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      {
        user
          ?
          <>
            <Nav />
            <div>hi {user.name}</div>
            <h1>Calendar App</h1>
            <Routes>
              <Route path='/' element={<Welcome demo={false}/>} />
              <Route path='/calendar' element={<CalendarPage />} />
              <Route path='/braindump' element={<BrainDumpPage />} />
              <Route path='/todos' element={<TodoPage />} />
            </Routes>
          </>
          :
          <>
          <Link to='/'>Home</Link>&nbsp; | &nbsp;<Link to='/signup'>Sign Up or Sign In</Link>
          <Routes>
            <Route path='/' element={<Welcome demo={true}/>}/>
            <Route path='/signup' element={<AuthPage setUser={setUser}/>} />
          </Routes>
          </>
      }
    </>
  )
}

export default App
