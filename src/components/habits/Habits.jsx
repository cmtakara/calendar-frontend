import React from 'react'

function StaticHabits() {
    return (
        <div>
            <h2>Habit Tracker</h2>
            <p style={{ fontSize: 'smaller' }}>get game points for completion</p>
            <div style={{ margin: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /></div>
                    <label>Work Out Daily </label><br />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /></div>
                    <label><> Take Lunch Breaks </></label><br />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /></div>
                    <label><> Practice Vocabulary </></label><br />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /></div>
                    <label><> Be Active Outdoors </></label><br />
                </div>
            </div>
        </div>
    )
}

function Habits() {
    return (
        <div style={{ margin: '15px', border: '2px white solid', borderRadius: '25px', backgroundColor: 'hsl(0, 0%, 70%', color: 'hsl(274, 75%, 60%)' }}>
            <StaticHabits />
        </div>
    )
}

export default Habits