import React from 'react'

function StaticTasks() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const later = new Date();
    later.setDate(later.getDate() + 3);
    

    return (
        <div style={{padding:'15px'}}>
            <h2>To Do List for this Week</h2>
            <p style={{fontSize: 'smaller'}}>get game points for completion</p>
            <div>
                <h3>Due Today</h3>
                <input type="checkbox"/><label><>Finish Daily Flash Cards - {today.toDateString()}</></label>
                <h3>Due later this week</h3>
                <input type="checkbox"/><label><>Seeds for Garden - {tomorrow.toDateString()}</></label><br/>
                <input type="checkbox"/><label><>apply for 2 jobs - {later.toDateString()}</></label>
            </div>
        </div>
    )
}

function DailyTasks() {
  return (
    <div style={{margin: '15px', border: '2px white solid', borderRadius: '25px', backgroundColor: 'hsl(0, 0%, 70%', color: 'hsl(254, 75%, 60%)'}}>
        <StaticTasks />
    </div>
  )
}

export default DailyTasks