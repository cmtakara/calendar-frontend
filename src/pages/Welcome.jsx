import React from 'react'
import DailyView from '../components/calendar/DailyView';
import Goals from '../components/goals/Goals'
import DailyTasks from '../components/todos/DailyTasks';
import Habits from '../components/habits/Habits';
import './Welcome.css';

function Welcome(props) {
  let demo = props.demo;

  return (
    demo ?
      <>
        <div>The below sample page give you an idea of the types of views and interactions you can have.<br/>
        To begin customizing your experience sign up and log in.</div>
        <div className='overview-container'>
          <DailyView />
          <div className='side-container'>
            <Goals />
            <DailyTasks />
            <Habits />
          </div>
        </div>
      </>
      :
      <>
        <div>Welcome logged in user</div>
        <div>User Default 1</div>
        <div>User Default 2</div>
        <div>User Default 3</div>
        <div>User Default 4</div>
      </>
  )
}

export default Welcome