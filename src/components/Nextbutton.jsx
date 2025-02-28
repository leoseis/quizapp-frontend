import React from 'react'

const Nextbutton = ({selectedOption,setQuestionIndex}) => {
    if(selectedOption===null) return null

  function NextQuestion(){
    setQuestionIndex(ctr=> ctr+1)
  }
  return (
    <button className='btn btn-ui'onClick={NextQuestion} >
        Next

    </button>
  )
}

export default Nextbutton
