import React, { useContext, useState } from 'react';
import { FontSizeContext } from './FontSizeContext';

const ChildInputComponent = () => {
  // Context값 사용!
  // 폰트사이즈를 입력하고, 엔터를 누르면
  // 입력한 폰트 사이즈로 변경하기!
 
  const {state, actions} = useContext(FontSizeContext)
  const [inputVal, setInputVal] = useState("")

  const handleOnChange = (e) => {
   const value = e.target.value
   setInputVal(value)
  }

  const handleOnKeyDown = (e) => {
    const value = e.key
    if (value === "Enter"){
      actions.setFontSize(inputVal)
    }
  }

  return (
    <div>
      <p style={{fontSize: state.fontSize}}>😎</p>
      <input type="text" onKeyDown={handleOnKeyDown} onChange={handleOnChange} placeholder="폰트 사이즈를 입력하세요" />
    </div>
  );
};

export default ChildInputComponent;