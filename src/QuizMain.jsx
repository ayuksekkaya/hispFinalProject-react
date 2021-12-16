import { GlobalStyle, Wrapper } from "./App.styles";
import { Link } from "react-router-dom";
import questions_array from "./questions";

const QuizMain = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Elige un quiz para tomarse</h1>
        <button className="next">
          <Link
            className="link"
            to="/picaroQuiz"
            state={{
              questions_array: questions_array.picaro,
              heading: "Averigue Si Eres Un Picaro",
              personalities: questions_array.picaro_personalities,
              images: questions_array.picaro_images,
            }}
          >
            Picaro Quiz
          </Link>
        </button>
        <button className="next">
          <Link
            className="link"
            to="/elHoyoQuiz"
            state={{
              questions_array: questions_array.elHoyo,
              heading: "Averigue Quien Eres En El Hoyo",
              personalities: questions_array.elhoyo_personalities,
              images: questions_array.elhoyo_images,
            }}
          >
            El Hoyo Quiz
          </Link>
        </button>
        <button className="next">
          <Link
            className="link"
            to="/refranesQuiz"
            state={{
              questions_array: questions_array.refranes,
              heading: "Averigue Si Sabes Los Refranes?",
              personalities: questions_array.refranes_personalities,
              images: questions_array.refranes_images,
            }}
          >
            Refranes
          </Link>
        </button>
      </Wrapper>
    </>
  );
};

export default QuizMain;
