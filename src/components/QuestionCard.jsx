import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

const QuestionCard = ({
  questionNr,
  totalQuestions,
  question,
  answers,
  callback,
  userAnswers,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Pregunta:{questionNr}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />

      <div>
        {answers.map((answer, index) => (
          <ButtonWrapper
            key={answer}
            userClicked={userAnswers && userAnswers == index + 1}
          >
            <button disabled={userAnswers} onClick={callback} value={index + 1}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
