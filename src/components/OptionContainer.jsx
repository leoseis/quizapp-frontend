import React from 'react'


const OptionContainer = ({question,selectedOption,setSelectedOption}) => {
  const options = question.options

  function selectAnswer(index) {
    setSelectedOption(index)
    
  }

    
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          key={option.id}
          className={`btn btn-option ${
            selectedOption === index ? "answer correct" : ""
          } `}
          onClick={() => selectAnswer(index, )}
        >
          {option.option}
        </button>
      ))}
    </div>
  );
};

export default OptionContainer;
