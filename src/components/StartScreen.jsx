import React from 'react';
import api from '../api';

const StartScreen = ({ numQuestions, username, setUsername }) => {
  const studentUsername = { username: username };

  function submitUsername() {
    api.post("has_taken_quiz/", studentUsername)
      .then(res => {
        console.log(res.data); 
      })
      .catch(err => {
        console.error("Error:", err.message); 
      });
      setUsername( "")
  }

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} Questions to test your React mastery</h3>
      <input
        placeholder="Enter username"
        className="input-ui"
        style={{ marginBottom: "20px", textTransform: "uppercase" }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="btn btn-ui"
        onClick={submitUsername}
        disabled={!username || username.trim() === ""}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
