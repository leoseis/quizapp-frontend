import React from 'react'
import OptionContainer from './OptionContainer'

const Question = ({question}) => {
  return (
    <div>
    <h4>{question.question}</h4>
      <OptionContainer question ={question}/>
    </div>
  )
}

export default Question
