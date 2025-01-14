import React from 'react'

const StartScreen = () => {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>questions to test your React mastery</h3>
      {/* {error && <Error error={error} />} */}
      <input
        placeholder="Enter username"
        className="btn btn-ui"
        style={{ marginBottom: "20px", textTransform: "uppercase" }} 
      />
      <button className="btn btn-ui" >  Let's start </button>
    </div>
  )
}

export default StartScreen
