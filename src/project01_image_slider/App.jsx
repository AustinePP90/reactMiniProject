import { useState, useEffect } from "react";
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
  // useEffect 두번째 인자 연구 sample 코드 -------------
  // const [sample, setSample] = useState(0);

  // length속성(배열의 index 시작 값은 0, 그러므로 length - 1)을 써서 이미지 갯수에 제한X
  const prevSlide = () => {
    // length속성 사용 안 하면, (current === 0 ? 3 : current - 1)
    // 배열의 이미지 갯수가 변하면 삼항연산자 true값을 계속 바꿔줘야 함
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  // prevSlide, nextSlide 참고용 ----------------------------------
  // const handleArrowClick = (direction) => {
  //   let _index = currentIndex + direction;
  //   if (_index < 0) {
  //     _index = 0;
  //   } else if (_index > sliders.length - 1) {
  //     _index = sliders.length - 1;
  //   }
  //   setCurrentIndex(_index);
  // };

  // 학습이 더 필요함! 리액트에서 setInterval함수 사용, 두번째 인자에 무엇을 넣을까?, useEffect에서 setInterval함수 작동원리 이해 안 됨...
  useEffect(() => {
    const interval = setInterval(() => {
      // useState값이 3이 넘어가면 안 됨, 이미지의 index값을 넘어감(현재 이미지 갯수는 4개)
      // useState값이 4가 되면, 4 % 4(images.length) = 0(current), 다시 0으로 만듬
      setCurrent((current) => (current + 1) % images.length);
    }, 3000);
    console.log("인터벌 set");
    return () => {
      clearInterval(interval);
      console.log("인터벌 clear");
    };
  }, [images.length]);

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
        {/* useEffect 두번째 인자 연구 sample 코드 --------------------- */}
        {/* <p>{sample}</p>
        <button onClick={() => setSample(sample + 1)}>sample</button> */}
      </div>
    </div>
  );
};
