import "./App.css";
import QuestionnaireCard from "./components/QuestionnaireCard";

function App() {
  return (
    <div className="relative py-5 px-5 flex flex-col justify-center items-center h-screen bg-pink-300">
      <div className="flex flex-col justify-center items-center">
        <QuestionnaireCard></QuestionnaireCard>
      </div>
      <div className="z-0 absolute bottom-0">
        <img src={process.env.PUBLIC_URL + "/cows.png"} alt="Cows" />
      </div>
    </div>
  );
}

export default App;
