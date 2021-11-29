import React, { useState } from "react";
import { GlobalStyle, Wrapper } from "./App.styles";
import QuestionCard from "./components/QuestionCard";

const questions_array = [
  {
    question: "Pagarias por la comida?",
    answers: [
      "Encontraria alguna manera para que no pague",
      "Si mis amigos dicen no pageramos, no pago",
      "Siempre pago",
    ],
  },
  {
    question: "Cuando has leido tu ultima libro?",
    answers: [
      "En el segundario",
      "En el ultimo ano",
      "Estoy leyendo algo ahora",
    ],
  },
  {
    question: "Que opinas de leyes?",
    answers: [
      "Solo sigo las leyes cuando me benefican",
      "Algunas leyes no tiene ningun sentido",
      "Leyes siempre tienen sentido, y hay que obedecerlas",
    ],
  },
  {
    question: "Alguna vez has mentido?",
    answers: [
      "Si estoy en una situacion duro, y mentir me va ayudar, claro que si!",
      "Si, pero siempre me siento malo. No me gusta enganar a la gente pero hago lo que tenga que hacer",
      "Casi nunca miento. Tendria que ser una situacion muy muy grave",
    ],
  },
  {
    question: "Usarias las cosas de algiuen sin preguntarles?",
    answers: [
      "Claro que si! Lo que no sabe, no le va a lastimar",
      "Si, pero solo si es de mi amigo",
      "Siempre le preguntaria a menos que me dijeron explicamente que puedo usar lo que quiera cuando quiera",
    ],
  },
];
const TOTAL_QUESTIONS = questions_array.length;

const Quizes = () => {
  const [questions, setQuestions] = useState(questions_array);
  const [number, setNumber] = useState(-1);
  const [gameOver, setGameOver] = useState(false);
  const [personality, setPersonality] = useState("Not Yet Decided");
  const [userAnswers, setUserAnswers] = useState([]);

  const startQuiz = () => {
    setGameOver(false);
    setPersonality("Not Yet Decided");
    setNumber(0);
    setUserAnswers([]);
  };

  const nextQuestions = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      let sum = userAnswers.reduce((a, b) => parseInt(a) + parseInt(b), 0);
      if (10 < sum && sum <= 15) {
        setPersonality("No Picaro");
      } else if (5 < sum && sum <= 10) {
        setPersonality("Picaro");
      } else {
        setPersonality("Picarisimo");
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
        <h1>Quien Eres?</h1>
        {gameOver || number === -1 ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        ) : null}
        {gameOver ? <p className="score"> Personality: {personality}</p> : null}
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
              Next
            </button>
            <button className="next" onClick={previousQuestion}>
              Previous
            </button>
          </>
        ) : null}
      </Wrapper>
    </>
  );
};

export default Quizes;
