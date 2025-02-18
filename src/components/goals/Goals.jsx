import React from 'react'

function StaticGoals() {
    return (
        <div>
            <h2>Major Goals</h2>
            <p style={{fontSize: 'smaller'}}>This is different from Milestones, which are smaller stepping stone goals</p>
            <ol>
                <li>Learn A Language to visit a country</li>
                <li>Create and Maintain Routines that support health</li>
                <li>Have a job that is satisfying and meaningful</li>
            </ol>
        </div>
    )
}

function Goals() {
  return (
    <div style={{margin: '15px', border: '2px white solid', borderRadius: '25px', backgroundColor: 'hsl(0, 0%, 70%', color: 'hsl(234, 75%, 60%)'}}>
        <StaticGoals />
    </div>
  )
}

export default Goals