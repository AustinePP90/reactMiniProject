import { useState } from "react";

// props로 question을 받음, question={question}
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
      {/* 단축평가 논리곱(&&) */}
      {isOpen && <p>{question.info}</p>}
    </section>
  );
};

// 논리합(||)의 경우
// 둘 중 하나만 true면 true로 평가되므로 왼쪽 피연산자가 true이면 바로 true를 반환한다.

// true || false; // true(오른쪽의 false는 볼 것도 없이, 왼쪽의 true 반환)
// true || true; // true(오른쪽의 true는 볼 것도 없이, 왼쪽의 true 반환)
// false || true; // true (오른쪽 값이 반환된다)
// false || false; // false (오른쪽 값이 반환된다)
// false || "banana"; // "banana"
// "apple" || "banana"; // "apple"

// 논리곱(&&)의 경우
// 둘다 true여야만 true이므로, 왼쪽 피연산자가 false면 바로 false로 평가된다.

// false && true; // false (오른쪽은 볼것도 없이, false)
// false && false; // false (오른쪽은 볼것도 없이, false)
// false && "banana"; // false
// null && false;  // null
// true && true;  // true
// true && false;  // false
// "apple" && true; // true
// "apple" && false; // false
// true && "banana"; // "banana"
// "apple" && "banana" // "banana"
