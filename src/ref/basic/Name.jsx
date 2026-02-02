import React, { useRef } from "react";

const Name = () => {
  // DOM을 접근하는 방법을 제공하는 훅함수
  // 어떻게 하면 한 번만 붙일 수 있을까?
  const inputRef = useRef();
  const handleOnClick = () => {
    if (!inputRef.current.value.includes("님님")) {
      inputRef.current.value += "님";
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleOnClick}>님</button>
    </div>
  );
};

export default Name;

import React, { useRef, useState } from 'react';

const Name = () => {
  // useRef(): DOM을 접근할 수 있게 제공해주는 훅함수
  // "님" 한 번 만 붙이기
  const [value, setValue] = useState("")
  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef()
  
  const handleValueOnChange = (e) => {
    setValue(e.target.value)
  }

  const handleButtonOnClick = () => {
    if(isClicked){ return; }
    setValue(inputRef.current.value + "님")
  }

  return (
    <div>
      <h1>{value}</h1>
      <input ref={inputRef} onChange={handleValueOnChange} value={value} type="text" />
      <button onClick={handleButtonOnClick}>+님</button>
    </div>
  );
};

export default Name;