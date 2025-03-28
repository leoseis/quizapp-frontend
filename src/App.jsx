import React, { useEffect, useState } from 'react'
import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import api from './api';
import NextButton from './components/Nextbutton';

const App = () => {
  const [loadingState, setLoadingState] = useState("loading");
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const numQuestions = questions.length;
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [studentScore, setStudentScore] = useState(0);



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
      <h4> score: {studentScore}</h4>
      <Main>
      {loadingState === "loading" && <Loader />}  
        {error && <Error error={error} />}
    {loadingState === "ready" && 
    <StartScreen username={username} 
    setUsername={setUsername}
     numQuestions={numQuestions}
     setLoadingState={setLoadingState}
     />}
     {loadingState === 'active' &&
     <> 
     <Question
      question={questions[questionIndex]}
     selectedOption={selectedOption}
     setSelectedOption={setSelectedOption}
     setCorrectOption={setCorrectOption}
     />
    <NextButton
     selectedOption={selectedOption}
     setQuestionIndex={setQuestionIndex}
     setSelectedOption={setSelectedOption} 
     numQuestions={numQuestions}
     questionIndex={questionIndex}
     correctOption={correctOption}
     setStudentScore={setStudentScore}
     
     />
     
     </>}
      </Main>
    </div>
  )
}

export default App