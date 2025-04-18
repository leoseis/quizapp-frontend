import React from 'react'

const FinishedScreen = ({studentScore,
  username,
  quizTotalScore,
   setLoadingState,
   setQuestionIndex,
   setSelectedOption,
   setCorrectOption,
   setStudentScore

  }) => {

const pecentage =(studentScore/quizTotalScore)* 100

function restartQuiz(){
  setLoadingState('ready')
  setQuestionIndex(0)
  setSelectedOption(null)
  setCorrectOption(null)
  setStudentScore(0)
}
  return (
    <>
      <p className="result">
        <span></span> Hi, 
        <span style={{ textTransform: "uppercase" }}>{username}</span>, you
        scored <strong>{studentScore}</strong> out of {quizTotalScore} 
      </p>
      <p className="highscore">(HighScore: {studentScore} points) ({pecentage}%)</p>

      <button className=" btn btn-ui"onClick={restartQuiz} >Restart Quiz</button>
    </>
  );
};

export default FinishedScreen;

    