import { useState } from "react";
import "./main.css";

// 이미지 src 배열로 받기
const images = [
  "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export const App = () => {
  // map함수에서 사용할 이미지 index값 설정
  const [current, setCurrent] = useState(0);

  // length속성(배열의 index 시작 값은 0, 그러므로 length - 1)을 써서 이미지 갯수에 제한X
  const prevSlide = () => {
    // length속성 사용 안 하면, (current === 0 ? 3 : current - 1)
    // 배열의 이미지 갯수가 변하면 삼항연산자 true값을 계속 바꿔줘야 함
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div>
      <h1>Project01_image_slider</h1>
      <div className="slider_wrap">
        <div className="left_btn" onClick={prevSlide}>
          ◀
        </div>
        <div className="right_btn" onClick={nextSlide}>
          ▶
        </div>
        {/* map함수를 사용해 각각의 이미지index값과 useState값 비교 */}
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slider">
                <img src={image} alt="images" />
                {/* <p>{index}</p> */}
              </div>
            )
        )}
      </div>
    </div>
  );
};
