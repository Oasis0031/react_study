import React from 'react';

const PropsComponent01 = (props) => {
  console.log("props", props)

  props.printName()

  return (
    <div>
      <p>{props.name}의 자식</p>
    </div>
  );
};

export default PropsComponent01;