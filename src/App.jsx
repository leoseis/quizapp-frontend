import React, { useEffect, useState } from 'react'
import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import api from './api';

const App = () => {
  const [loadingState, setLoadingState] = useState("loading");
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const numQuestions = questions.length;


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
      <Main>
      {loadingState === "loading" && <Loader />}  
        {error && <Error error={error} />}
    {loadingState === "ready" && 
    <StartScreen username={username} 
    setUsername={setUsername}
     numQuestions={numQuestions}
     setLoadingState={setLoadingState}
     />}
     {loadingState === 'active' &&<Question question={questions[0]}/>}
      </Main>
    </div>
  )
}

export default App