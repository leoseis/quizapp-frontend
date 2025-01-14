import React from 'react'
import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import StartScreen from './components/StartScreen';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Main>
        <Loader/>
        <Error/>
        <StartScreen/>
      </Main>
    </div>
  )
}

export default App