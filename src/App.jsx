import React, { useState } from 'react'
import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import StartScreen from './components/StartScreen';

const App = () => {
  const [loadingState, setLoadingState] = useState("loading");
  const [error, setError] = useState(null);
  return (
    <div className='app'>
      <Header/>
      <Main>
      {loadingState === "loading" && <Loader />}  
        {error && <Error error={error} />}
        {loadingState === "ready" && <StartScreen/>}
      </Main>
    </div>
  )
}

export default App