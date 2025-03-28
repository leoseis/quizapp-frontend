import React from 'react'
import OptionContainer from './OptionContainer'

const Question = ({question,selectedOption,setSelectedOption,setCorrectOption}) => {
  return (
    <div>
    <h4>{question.question}</h4>
      <OptionContainer
       question ={question}
       setSelectedOption ={setSelectedOption}
       selectedOption = {selectedOption}
       setCorrectOption= {setCorrectOption}
       />
    </div>
  )
}

export default Question
