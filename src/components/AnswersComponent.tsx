import React from "react";

interface AnswersComponentProps {
  answers: string[];
  onAnswer: (answer: string) => void;
}

const AnswersComponent: React.FC<AnswersComponentProps> = ({
  answers,
  onAnswer,
}) => {
  return (
    <div className="space-y-2">
      <ul className="list-none">
        {answers.map((answer, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 my-5 bg-pink-200 hover:bg-pink-300 hover:font-bold rounded-lg shadow-md"
            onClick={() => onAnswer(answer)}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswersComponent;
