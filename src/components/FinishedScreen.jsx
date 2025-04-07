import React from 'react'

const FinishedScreen = ({studentScore,username,quizTotalScore}) => {

  return (
    <>
      <p className="result">
        <span></span> Hi, 
        <span style={{ textTransform: "uppercase" }}>{username}</span>, you
        scored <strong>{studentScore}</strong> out of {quizTotalScore} 
      </p>
      <p className="highscore">(HighScore: {studentScore} points)</p>

      <button className=" btn btn-ui" >Restart Quiz</button>
    </>
  );
};

export default FinishedScreen;

    