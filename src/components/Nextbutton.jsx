import React from 'react'

const Nextbutton = ({selectedOption,setQuestionIndex,setSelectedOption}) => {
    if(selectedOption===null) return null

  function NextQuestion(){
    setQuestionIndex(ctr=> ctr+1)
    setSelectedOption(null)
  }
  return (
    <button className='btn btn-ui'onClick={NextQuestion} >
        Next

    </button>
  )
}

export default Nextbutton
