import React, { useEffect, useState } from 'react'
import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import api from './api';
import NextButton from './components/Nextbutton';
import FinishedScreen from './components/FinishedScreen';
import Progress from './components/Progress';
import Timer from './components/Timer';
import Footer from './components/Footer';

const App = () => {
  const [loadingState, setLoadingState] = useState("loading");
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const scorePerQuestion = 5;
  const secondsPerQuestion = 10;
  const numQuestions = questions.length;
  const quizTotalScore = numQuestions * scorePerQuestion;
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [studentScore, setStudentScore] = useState(0);
  const [timeRemaining,setTimeRemaining] = useState(null);
  

 




  function submitQuizToApi(updatedScore){

 
    const studentQuiz = {
      username:username, score:updatedScore
    }
    api.post('submit_quiz/', studentQuiz)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.message));
  }


  useEffect(function () {
    api .get("questions")
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data)
        setLoadingState('ready')
      })
    
      .catch((err) => {
        console.log(err.message);
        setError(err.message)
      });
  }, []);




  return (
    <div className='app'>
      <Header/>
      {/* <h4> score: {studentScore}</h4> */}
      <Main>
      {loadingState === "loading" && <Loader />}  
        {error && <Error error={error} />}
    {loadingState === "ready" && 
    <StartScreen username={username} 
    setUsername={setUsername}
     numQuestions={numQuestions}
     setLoadingState={setLoadingState}
     setTimeRemaining={setTimeRemaining}
     secondsPerQuestion={secondsPerQuestion}
     
     />}
     {loadingState === 'active' &&
     <> 
     <Progress questionIndex={questionIndex}
     username={username}numQuestions={numQuestions}/>
     <Question
      question={questions[questionIndex]}
     selectedOption={selectedOption}
     setSelectedOption={setSelectedOption}
     setCorrectOption={setCorrectOption}
     />
     <Footer>
      <Timer
       timeRemaining={timeRemaining}
       setTimeRemaining= {setTimeRemaining}
       setLoadingState={setLoadingState}
      
      />
     
      <NextButton
     selectedOption={selectedOption}
     setQuestionIndex={setQuestionIndex}
     setSelectedOption={setSelectedOption} 
     numQuestions={numQuestions}
     questionIndex={questionIndex}
     correctOption={correctOption}
     setStudentScore={setStudentScore}
     setLoadingState={setLoadingState}
     submitQuizToApi={submitQuizToApi}
     />
      
     </Footer>
    
     
     </>}

     {loadingState ==='finished'&&
     <FinishedScreen 
     studentScore={studentScore}
     username={username}
     quizTotalScore={quizTotalScore}
     setLoadingState={setLoadingState}
     setQuestionIndex={ setQuestionIndex}
     setSelectedOption={setSelectedOption}
     setCorrectOption={setCorrectOption}
     setStudentScore={setStudentScore}
     setUsername={setUsername}
     />}

      </Main>
    </div>
  )
}

export default App