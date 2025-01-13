import React from 'react'
import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";

const App = () => {
  return (
    <div className='qpp'>
      <Header/>
      <Main>
        <Loader/>
        <Error/>
      </Main>
    </div>
  )
}

export default App