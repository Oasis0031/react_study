import React from "react";
import PropsComponent01 from "./PropsComponent01";
import PropsComponent02 from "./PropsComponent02";
import PropsComponent03 from "./PropsComponent03";
import PropsComponent04 from "./PropsComponent04";

const Container = () => {
  const name = "김유신";
  const printName = () => {
    console.log(name);
  };
  const age = 30;
  const hobby = "낚시";
  const color = "crimson";
  const fontSize = "20px";

  return (
    <div>
      {/* <PropsComponent01 name={name} printName={printName} />
      <PropsComponent02 color={color} />
      <PropsComponent03
        fontSize={fontSize}
        name={name}
        age={age}
        hobby={hobby}
        color={color}
      /> */}
      <PropsComponent04>
        <p>컴포넌트 내부에 있는 자식요소 부우</p>
      </PropsComponent04>
    </div>
  );
};

export default Container;
