import React, { useState } from 'react';
import api from '../api';
import Error from "./Error";
 


const StartScreen = ({ numQuestions, username, setUsername,
  setLoadingState,setTimeRemaining,secondsPerQuestion }) => {
  const studentUsername = { username: username };
  const [error, setError] = useState(null);

  function submitUsername() {
    api.post("has_taken_quiz/", studentUsername)
      .then(res => {
        console.log(res.data); 
        setLoadingState('active')
        localStorage.setItem("username",username)
        setTimeRemaining(secondsPerQuestion*numQuestions)
      })
      .catch((err) => {
        setError(err.response.data.error);
      });

     
  }

  return (
    <div className="start">
      <h2>Welcome to Quiz Mastery!</h2>
      <h3>{numQuestions} Quiz questions test your knowledge</h3>
      {error && <Error error={error} />}
      <input
        placeholder="Enter username"
        className="btn btn-ui"
        style={{ marginBottom: "20px", textTransform: "uppercase" }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="btn btn-ui"
        onClick={submitUsername}
        disabled={username === ""}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
                                    