import React from 'react'

function HourView(props) {
    console.log(props.time);
  return (
    <div>{props.time}</div>
  )
}

export default HourView