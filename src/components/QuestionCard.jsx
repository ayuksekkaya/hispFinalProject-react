import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

const QuestionCard = ({ questionNr, totalQuestions, question, answers }) => (
  <Wrapper>
    <p className="number">
      Question:{questionNr}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />

    <div>
      {answers.map((answer) => (
        <ButtonWrapper>
          <button>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
