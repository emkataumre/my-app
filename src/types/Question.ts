export type Question = {
  question: string;
  answers: string[];
  format: (previousAnswer?: string) => string;
};
