import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {

  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.

  //useContext로 AnimalsContext 가져와서 구조분해할당
 const {state, actions} = useContext(AnimalsContext) 
  //useState로 animals 설정
 const [animals, setAnimals] = useState("")

  //일단 input에 onKeyDown 속성 설정부터
  const handleOnKeyDown = (e) => {
    if(e.key === 'enter'){
      actions.insert(animals)
    } 
  }
  
  //state에 동물을 추가하기 위해서는 onChange
  const handleOnChange = (e) => {
    setAnimals(e.target.value) 
    console.log(e.target.value)
  }

  return (
    <div>
      
      <button onClick={}>{animals}</button>
      <input type="text" onKeyDown={handleOnKeyDown} onChange={handleOnChange} placeholder='동물을 입력하세요.'/>
      
    </div>
  );
};

export default Animals;