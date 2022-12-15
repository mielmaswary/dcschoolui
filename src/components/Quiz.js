import React, { Fragment } from "react";

const Quiz = (props) => {
  const { text, answersElement, isAnswerChosen, isEncorrectAnswerChosen } =
    props;
  const alertText = isEncorrectAnswerChosen
    ? "תשובתך אינה נכונה... הנך מועבר לצפייה חוזרת בסרטון"
    : "תשובה נכונה! הנך מועבר לסרטון הבא";

  const alertClassName = isEncorrectAnswerChosen
    ? "feedback-correct"
    : "feedback-encorrect";
  return (
    <div>
      {!isAnswerChosen && (
        <Fragment>
          <div className="question-text">שאלה: {text}</div>

          <div moue className="answers-container">
            {answersElement}
          </div>
        </Fragment>
      )}

      {isAnswerChosen && <div className={alertClassName}>{alertText}</div>}
    </div>
  );
};

export default Quiz;
