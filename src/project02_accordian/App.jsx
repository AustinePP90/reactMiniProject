import { Question } from "./Question";
import "./main.css";

// 배열로 질문 데이터 저장함
const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 2,
    title: "How much does it cost?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 3,
    title: "When can I get it?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
];

export const App = () => {
  return (
    <div>
      <h1>Project02_FAQ/Accordian</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {/* map()함수로 각각의 배열 데이터(questions)에 접근 */}
          {questions.map((question) => (
            <Question key={question.id} question={question} /> // Question 컴포넌트에 props(key, question) 전달
          ))}
        </div>
      </div>
    </div>
  );
};
