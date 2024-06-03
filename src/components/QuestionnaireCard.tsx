import React, { useState } from "react";
import AnswersComponent from "./AnswersComponent";
import QuestionComponent from "./QuestionComponent";
import { Question } from "../types/Question";

const QuestionnaireCard = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions: Question[] = [
    {
      question: "which day would we go",
      answers: ["wednesday", "thursday", "friday", "saturday", "sunday"],
      format: (previousAnswer) =>
        `hypothetically, if we went on a date, which day would we go?`,
    },
    {
      question: "what would we do",
      answers: [
        "have a picnic at the christiania lakes",
        "go to reffen",
        "go to the deerpark",
        "go thrifting",
      ],
      format: (previousAnswer) =>
        previousAnswer
          ? `if we were to go on a date on ${previousAnswer}, what would we do?`
          : "what would we do?",
    },
    {
      question: "would you like me to roll a joint for us to smoke",
      answers: ["Yes", "No"],
      format: (previousAnswer) =>
        previousAnswer
          ? `if we were to ${previousAnswer}, would you like me to roll a joint for us to smoke?`
          : "would you like me to roll a joint for us to smoke?",
    },
  ];

  const handleAnswer = (answer: string) => {
    setSelectedAnswers((prevAnswers) => [...prevAnswers, answer]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (currentQuestionIndex >= questions.length) {
    const finalAnswer = selectedAnswers.slice(1).map((answer, index) => {
      if (index === 0) {
        if (answer === "have a picnic at the christiania lakes") {
          return "we should have a picnic at the christiania lakes,";
        } else if (answer === "go to reffen") {
          return "we should go to reffen and enjoy some nice food by the water,";
        } else if (answer === "go to the deerpark") {
          return "we take a walk in the deerpark and look at the deer,";
        } else if (answer === "go thrifting") {
          return "we should go thrifting together and see what we can find,";
        } else {
          return "";
        }
      } else if (index === 1) {
        return answer === "Yes"
          ? "i will roll a joint for us to smoke together :)"
          : ":)";
      }
      return null;
    });

    return (
      <div>
        <h1 className="text-3xl text-center">
          Thank you for completeing my questionnaire
        </h1>
        <h2 className="font-bold underline mb-20 mt-5 text-center">
          Please screenshot this page
        </h2>
        <div className="flex flex-col items-center justify-center bg-emerald-200 p-5 rounded-lg">
          <div className="mb-4 text-xl">
            {"would you like to go on a date on " +
              selectedAnswers[0] +
              "." +
              " " +
              finalAnswer.join(" ")}
          </div>
          <div className="mb-2">Please submit your answer here:</div>
          <a
            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full"
            href="https://forms.gle/DejvkN5DB4YcHvsX6"
          >
            CLICK ME
          </a>
        </div>
        <img src={process.env.PUBLIC_URL + "/roseguy.png"} alt="Rose Guy" />
      </div>
    );
  }

  const previousAnswer = selectedAnswers[currentQuestionIndex - 1];

  return (
    <div className="z-10 p-6 max-w-md mx-auto bg-pink-100 rounded-xl shadow-lg space-y-4">
      <QuestionComponent
        question={questions[currentQuestionIndex].question}
        previousAnswer={previousAnswer}
        format={questions[currentQuestionIndex].format}
      ></QuestionComponent>
      <AnswersComponent
        answers={questions[currentQuestionIndex].answers}
        onAnswer={handleAnswer}
      ></AnswersComponent>
    </div>
  );
};

export default QuestionnaireCard;
