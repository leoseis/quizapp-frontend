import React from 'react'
import OptionContainer from './OptionContainer'

const Question = ({question}) => {
  return (
    <div>
    <h4>{question.question}</h4>
      <OptionContainer/>
    </div>
  )
}

export default Question
