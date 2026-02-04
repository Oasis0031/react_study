import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div>
      여기가 아닌듯 ㅋㅋ
      <Link to={"/"}>메인으로</Link>
    </div>
  );
};

export default Notfound;