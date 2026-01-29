import React, {useState} from "react";

// 강아지 버튼과 고양이 버튼을 만들고
// 버튼을 눌렀을 때 각각 동물의 울음소리가 화면에 나오도록 구현하기

const Sound = () => {
  const [sound, setSound] = useState("");
  
  const meow = () => {
    setSound("냥");
  };

  const bark = () => {
    setSound("댕");
  };

  return (
    <div>
      <h1>{sound}</h1>
      <button onClick={meow}>강아지</button>
      <button onClick={bark}>고양이</button>

    </div>
  );
};

export default Sound;
