import { useContext, useEffect, useState } from 'react'
import DailyView from '../components/calendar/DailyView';
import Goals from '../components/goals/Goals'
import DailyTasks from '../components/todos/DailyTasks';
import Habits from '../components/habits/Habits';
import './Welcome.css';
import UserContext from '../contexts/UserContext'

function Welcome(props) {
  const [currentUser, setCurrentUser ]  = useState({});
  let demo = props.demo;
  const userContextValue = useContext(UserContext);

  useEffect(checkUser, []);

  function checkUser () {
  if (!demo) {
    // const { user } = useContext(UserContext);
    setCurrentUser(userContextValue.user);
    // console.log(userContextValue.user)
  }
}

  // currently, there isn't a user profile that contains preferences, but the following set up is in preparation for that
  // right now, this seems redundant, but it will be retrieved from the database and then used to set views
  const userPreferences = {
    view1: 'daily',
    view2: 'goals',
    view3: 'todos',
    view4: 'habits',
    color: 'bright'
  }

  return (
    demo ?
      <>
        <div>The below sample page give you an idea of the types of views and interactions you can have.<br/>
        To begin customizing your experience sign up and log in.</div>
        <div className='overview-container'>
          <DailyView demo={true}/>
          <div className='side-container'>
            <Goals  demo={true}/>
            <DailyTasks  demo={true}/>
            <Habits  demo={true}/>
          </div>
        </div>
      </>
      :
      <>
        <div>Welcome {currentUser.name}</div>
        <div className='overview-container'>
          {userPreferences.view1 === 'daily' ? <DailyView/> : <div>This is not defined yet</div>}
          <div className='side-container'>
          {userPreferences.view2=== 'goals' ? <Goals /> : <div>This is not defined yet</div>}
          {userPreferences.view3 === 'todos' ? <DailyTasks /> : <div>This is not defined yet</div>}
          {userPreferences.view4 === 'habits' ? <Habits /> : <div>This is not defined yet</div>}
            
          </div>
        </div>
      </>
  )
}

// ! add this in
// create a function
// getUserView (userPreference)
// return <MatchingComponent/>

export default Welcome