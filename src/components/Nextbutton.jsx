import React from 'react';

const NextButton = ({
  selectedOption,
  setQuestionIndex,
  setSelectedOption,
  numQuestions,
  questionIndex
}) => {
  if (selectedOption === null) return null;

  function NextQuestion() {
    setQuestionIndex((curr) => curr + 1);
    setSelectedOption(null);
  }
    
    

  if (questionIndex === numQuestions - 1) {      //geting the last question 
    return (
      <button className="btn btn-ui">
        Finish
      </button>
    );
  }

  return (
    <button className="btn btn-ui"  onClick={NextQuestion} 
    >
      Next
    </button>
  );
};

export default NextButton;
