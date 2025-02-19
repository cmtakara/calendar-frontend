import React from 'react'
import './About.css'

function About() {
  return (
    <div className='mynerve-regular'>
        <h1 >What is different about this calendar?</h1>
        <p className='coming-soon-regular'>This isn't just a calendar.  It takes the ideas from bullet journaling and comines them in electronic form.</p>
        <div className='coming-soon-regular'>There is:
          <ul style={{display: "flex", flexDirection: "column", marginLeft: 'none'}}>
            <li style={{width: '80%'}}>a daily brain dump, where you can unload all of your thoughts in the morning, and then categorize them.</li>
            <li style={{width: '80%'}}>a to do list, where you can keep track of your upcoming tasks</li>
            <li style={{width: '80%'}}>a calendar, where you can define routine blocks and keep track of upcoming tasks and events</li>
            
          </ul>
           </div>
        <h2>What inspired me</h2>
    </div>
  )
}

export default About