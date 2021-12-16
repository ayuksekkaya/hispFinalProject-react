import React, { useState } from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
import QuestionCard from "./components/QuestionCard";
import { Image } from "react-bootstrap";
import { useLocation } from "react-router";

const Quiz = () => {
  const location = useLocation();
  const { questions_array, heading, personalities, images } = location.state;
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(-1);
  const [gameOver, setGameOver] = useState(false);
  const [personality, setPersonality] = useState("Not Yet Decided");
  const [userAnswers, setUserAnswers] = useState([]);
  const [image, setImage] = useState("");
  const TOTAL_QUESTIONS = questions_array.length;

  const startQuiz = () => {
    setGameOver(false);
    setPersonality("Not Yet Decided");
    setNumber(0);
    setUserAnswers([]);
    setImage("");
    setQuestions(questions_array);
  };

  const nextQuestions = () => {
    const nextQuestion = number + 1;
    console.log(location.state);
    console.log(personalities);
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      let sum = userAnswers.reduce((a, b) => parseInt(a) + parseInt(b), 0);
      if (10 < sum && sum <= 15) {
        setPersonality(personalities[0]);
        setImage("../" + images[0]);
      } else if (5 < sum && sum <= 10) {
        setPersonality(personalities[1]);
        setImage("../" + images[1]);
      } else {
        setPersonality(personalities[2]);
        setImage("../" + images[2]);
      }
    } else {
      setNumber(nextQuestion);
    }
  };

  const previousQuestion = () => {
    const prevQuestion = number - 1;

    if (prevQuestion >= 0) {
      setNumber(prevQuestion);
    }
  };

  const recordAnswer = (e) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      setUserAnswers((prev) => [...prev, answer]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>{heading}</h1>
        <p className="info">
          {" "}
          Cuando empiece, elige una opcion por cada pregunta. Una vez hayas
          elegido, no puedes cambiar la selecion. <br></br>
          Sigue hacer click sobre "siguiente" hasta que tengas el score.
        </p>
        {gameOver || number === -1 ? (
          <button className="start" onClick={startQuiz}>
            Vaya
          </button>
        ) : null}
        {gameOver ? (
          <>
            <p className="score"> Personalidad: {personality}</p>
            <Image src={image}></Image>
          </>
        ) : null}
        {!gameOver && number > -1 ? (
          <>
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswers={userAnswers ? userAnswers[number] : undefined}
              callback={recordAnswer}
            ></QuestionCard>
            <button className="next" onClick={nextQuestions}>
              Siguiente
            </button>
            <button className="next" onClick={previousQuestion}>
              Anterior
            </button>
          </>
        ) : null}
      </Wrapper>
    </>
  );
};

export default Quiz;
