import React from 'react'

const Progress = () => {
  return (
    <header className="progress">
    <progress max= "5"value="4"/>
    <p>
      Question <strong>4</strong> /5 
    </p>

    <p>
      Hi, azuka <strong style={{ textTransform: "uppercase" }}></strong>
    </p>
  </header>
  )
}

export default Progress
