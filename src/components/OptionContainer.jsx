import React from 'react'

const OptionContainer = ({question}) => {

    const options = question.options
  return (
    <div className='options'>
        {options.map((option)=><button key={option.id} className='btn btn-option'>{option.option}</button>)}
      
    </div>
  )
}

export default OptionContainer
