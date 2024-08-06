import { useState } from "react";

export const Question = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className={isOpen ? "open" : "closed"}>
        <h4>{question.title}</h4>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "close" : "open"}
        </button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
};
