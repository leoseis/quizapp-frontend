import React from 'react'

const FinishedScreen = () => {
    return (
        <>
          <p className="result">
            <span></span> Hi
            <span style={{ textTransform: "uppercase" }}></span>, you
            scored <strong>80</strong> out of  10%
          </p>
          <p className="highscore">HighScore:80 points</p>
    
          <button className=" btn btn-ui" >Restart Quiz</button>
        </>
      );
    };
    
    export default FinishedScreen;
    