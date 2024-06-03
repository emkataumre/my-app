import React from "react";

interface QuestionComponentProps {
  question: string;
  previousAnswer?: string;
  format: (previousAnswer?: string) => string;
}
const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  previousAnswer,
  format,
}) => {
  const formattedQuestion = format(previousAnswer);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-pink-700">
        {formattedQuestion}
      </h2>
    </div>
  );
};
export default QuestionComponent;
