import React, { useState } from "react";

const AddTest = ({ data, closeTest, addTest }) => {
  const initialState = {
    question: "",
    answer: null,
    choices: [],
    questionNumber: null,
  };

  const [currentTest, setCurrentTest] = useState(data);
  const [currentQuestion, setCurrentQuestion] = useState(initialState);
  const [dropDown, setDropDown] = useState(false);

  const handleChoiceSelect = (index, value) => {
    setDropDown(false);
    setCurrentQuestion({
      ...currentQuestion,
      answer: { index: index, value: value },
    });
  };

  const handleChoiceInput = (index, value) => {
    const newChoices = [...currentQuestion.choices];
    newChoices[index] = value;
    setCurrentQuestion({ ...currentQuestion, choices: newChoices });
  };

  const handleNext = () => {
    const existingIndex = currentTest?.indexOf(currentQuestion);
    const updatedtest = [...currentTest];
    if (existingIndex === -1) {
      console.log("executing");
      updatedtest?.push(currentQuestion);
      setCurrentTest(updatedtest);
      //   initialState?.questionNumber += 1;
      setCurrentQuestion(initialState);
    } else if (existingIndex + 1 === currentTest.length) {
      updatedtest[existingIndex] = currentQuestion;
      setCurrentTest(updatedtest);
      setCurrentQuestion(initialState);
    } else {
      updatedtest[existingIndex] = currentQuestion;
      setCurrentTest(updatedtest);
      setCurrentQuestion(currentTest[existingIndex + 1]);
    }
  };

  const checkquestionMatch = (index) => {
    if (currentTest?.indexOf(currentQuestion) === index) return "#8949ff";
    return "transparent";
  };

  const questionValidation = () => {
    if (
      currentQuestion?.question.length > 5 &&
      currentQuestion?.answer &&
      currentQuestion?.choices?.length === 4
    )
      return true;
    return false;
  };

  const handleAddTest = () => {
    addTest(currentTest);
    closeTest();
  };

  return (
    <div className="add-test-cnt">
      <p>Test for this lessons</p>
      <div className="questions-block-cnt">
        {currentTest?.map((test, index) => (
          <div
            className="question-block"
            style={{ background: checkquestionMatch(index) }}
            key={index}
            onClick={() => setCurrentQuestion(test)}
          >
            <p
              key={index}
              className="question-number"
              style={{
                color: checkquestionMatch(index) === "transparent" && "#8949ff",
              }}
            >
              {index + 1}
            </p>
          </div>
        ))}
        <div
          className="question-block"
          style={{ background: currentQuestion }}
          onClick={() => setCurrentQuestion(initialState)}
        >
          <p className="question-number">{currentTest?.length + 1}</p>
        </div>
      </div>
      <div className="question-inputs-cnt">
        <div className="question-input-cnt">
          <p>Question</p>
          <textarea
            className="question-input"
            value={currentQuestion?.question}
            onChange={(e) =>
              setCurrentQuestion({
                ...currentQuestion,
                question: e.target.value,
              })
            }
          />
        </div>
        <div className="choice-cnt">
          <div className="choice-header">
            <p>Choices</p>
            <div className="select-answer-cnt">
              <p>Select Answer</p>
              <div className="selected-choice-display">
                <p onClick={() => setDropDown(true)}>
                  {currentQuestion?.answer?.value
                    ? currentQuestion?.answer?.value
                    : "Not selected"}
                </p>
                {dropDown && (
                  <div className="drop-down-cnt">
                    <div
                      className="drop-down-choice"
                      onClick={() => handleChoiceSelect(0, "Choice one")}
                    >
                      <p>Choice one</p>
                    </div>
                    <div
                      className="drop-down-choice"
                      onClick={() => handleChoiceSelect(1, "Choice two")}
                    >
                      <p>Choice two</p>
                    </div>
                    <div
                      className="drop-down-choice"
                      onClick={() => handleChoiceSelect(2, "Choice three")}
                    >
                      <p>Choice three</p>
                    </div>
                    <div
                      className="drop-down-choice"
                      onClick={() => handleChoiceSelect(3, "Choice four")}
                    >
                      <p>Choice four</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="choice">
            <p>Choice one</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter choice one"
              value={
                currentQuestion?.choices[0] ? currentQuestion?.choices[0] : ""
              }
              onChange={(e) => handleChoiceInput(0, e.target.value)}
            />
          </div>
          <div className="choice">
            <p>Choice two</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter choice two"
              value={
                currentQuestion?.choices[1] ? currentQuestion?.choices[1] : ""
              }
              onChange={(e) => handleChoiceInput(1, e.target.value)}
            />
          </div>
          <div className="choice">
            <p>Choice three</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter choice three"
              value={
                currentQuestion?.choices[2] ? currentQuestion?.choices[2] : ""
              }
              onChange={(e) => handleChoiceInput(2, e.target.value)}
            />
          </div>
          <div className="choice">
            <p>Choice four</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter choice four"
              value={
                currentQuestion?.choices[3] ? currentQuestion?.choices[3] : ""
              }
              onChange={(e) => handleChoiceInput(3, e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="action-btns-cnt">
        <div
          className=" course-delete-btn cancel-test-btn"
          onClick={() => closeTest()}
        >
          Cancel
        </div>
        <div
          className=" course-delete-btn save-next "
          onClick={() => handleNext()}
          style={{
            background: !questionValidation() && "gray",
            pointerEvents: !questionValidation() && "none",
          }}
        >
          Save and Next
        </div>
        <div className="add-new-lesson-btn" onClick={() => handleAddTest()}>
          Add to Lesson
        </div>
      </div>
    </div>
  );
};

export default AddTest;
