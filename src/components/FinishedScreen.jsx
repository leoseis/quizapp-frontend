import React from 'react'

const FinishedScreen = ({studentScore,
  quizTotalScore,
   setLoadingState,
   setQuestionIndex,
   setSelectedOption,
   setCorrectOption,
   setStudentScore,
   setUsername

  }) => {

const pecentage =(studentScore/quizTotalScore)* 100
const username = localStorage.getItem("username")


function restartQuiz(){
  setLoadingState('ready')
  setQuestionIndex(0)
  setSelectedOption(null)
  setCorrectOption(null)
  setStudentScore(0)
  setUsername("")
  localStorage.removeItem("username")
}
  return (
    <>
      <p className="result">
        <span></span> Hi, 
        <span style={{ textTransform: "uppercase" }}>{username}</span>, you
        scored <strong>{studentScore}</strong> out of {quizTotalScore} 
      </p>
      <p className="highscore">(HighScore: {studentScore} points) ({pecentage}%)</p>

      <button className=" btn btn-ui"onClick={restartQuiz} >Restart Quiz now</button>
    </>
  );
};

export default FinishedScreen;

    