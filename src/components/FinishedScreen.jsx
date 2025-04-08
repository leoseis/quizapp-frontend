import React from 'react'

const FinishedScreen = ({studentScore,username,quizTotalScore}) => {
const pecentage =(studentScore/quizTotalScore)* 100
  return (
    <>
      <p className="result">
        <span></span> Hi, 
        <span style={{ textTransform: "uppercase" }}>{username}</span>, you
        scored <strong>{studentScore}</strong> out of {quizTotalScore} 
      </p>
      <p className="highscore">(HighScore: {studentScore} points) ({pecentage}%)</p>

      <button className=" btn btn-ui" >Restart Quiz</button>
    </>
  );
};

export default FinishedScreen;

    