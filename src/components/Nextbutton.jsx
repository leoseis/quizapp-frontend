import React from 'react'

const Nextbutton = ({selectedOption}) => {
    if(selectedOption===null) return null
  return (
    <button className='btn btn-ui'>
        Next

    </button>
  )
}

export default Nextbutton
