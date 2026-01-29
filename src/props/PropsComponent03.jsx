import React from "react";

const PropsComponent03 = ({name, age, hobby, fontSize, color}) => {
  // 1. 이름, 나이, 취미, 폰트 색상, 컬러를 props로 넘겨서 화면에 모두 출력하기
  // 2. 폰트 사이즈, 컬러를 적용시키기

  const style = {fontSize, color}

  return (
    <div>
      <p style={style}>{name}</p>
      <p style={style}>{age}</p>
      <p style={style}>{hobby}</p>
    </div>
  );
};

export default PropsComponent03;