import React, { useState } from "react";

const Count = () => {
  //훅함수 - use...
  console.log(useState())
  // 유즈 스테이트 내부가 초기값
  const [number, setNumber] = useState(0)

  const decrease = () => {
    setNumber(number - 1)
    console.log(setNumber);
  };

  const increase = () => {
    setNumber(number + 1)
    console.log(setNumber);
  };

  return (
    <div>
      <button  onClick={decrease}> -1 </button>
      <h1>{number}</h1>
      <button onClick={increase}> +1 </button>
    </div>
  );
};

export default Count;
