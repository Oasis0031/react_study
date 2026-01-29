import React from 'react';
import { jsx } from 'react/jsx-runtime';

//jsx는 if문을 사용할 수 없기 때문에 삼항 연산자를 지원한다.
// 조건식 ? 참일때 랜더링할 jsx : 거짓일 때 랜더링할 jsx
// 조건식 && 참일 때 랜더링할 jsx 거짓이면 아무것도 출력 x
// && 연산자는 앞의 조건식이 false이면 뒤를 실행하지 않으며
// false라는 값은 랜더링되지 않는다.


const Jsx04 = () => {

  const name = "홍길동"
  const isLogin = false;
  const isGuest = true;

  // isGuest가 true라면 p태그의 게스트를 화면에 출력
  // isLogin이 true라면 이름을 출력, false라면 비회원입니다를 출력
  // "데이터(상태)는 위에서 정의하고, 어떻게 보여줄지(로직)는 JSX 안에서 결정한다"

  return (
   <div>
      <p>
        {isGuest && <p>게스트</p>}
        {isLogin ? <p>{name}</p> : <p>비회원입니다.</p>}
      </p>
    </div>
  );
}

export default Jsx04;