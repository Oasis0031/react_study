import React, { useRef } from "react";

const Check = () => {
  // ref
  // "검사!"버튼을 누르면 아이디 또는 비밀번호를 검사하기
  // 아이디 사용불가한 아이디가 존재
  // test123@gmail.com
  // test456@gmail.com
  // test678@gmail.com

  // 비밀번호가 없거나 위에 사용 불가한 아이디를 사용했다면
  // #result에 "검사 실패!"를 출력
  // 정상적으로 입력했다면 #result에 "검사 성공😁"을 출력

  const recentlyId = [
    "test123@gmail.com",
    "test456@gmail.com",
    "test678@gmail.com",
  ];

  //useRef는 각각 만들기
  const resultRef = useRef(null);
  const idRef = useRef(null);
  const pwRef = useRef(null);

  const handleButtonOnClick = (e) => {
    e.preventDefault();

    const pw = pwRef.current.value;
    const existId = recentlyId.includes(idRef.current.value);
    if (!pw || existId) {
      return (resultRef.current.innerText = "검사 실패!");
    } else {
      return (resultRef.current.innerText = "검사 성공!");
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>
            <span>아이디</span>
            <input type="text" ref={idRef} />
          </label>
        </div>
        <div>
          <label>
            <span>비밀번호</span>
            <input type="password" ref={pwRef} />
          </label>
        </div>
        <button type="button" onClick={handleButtonOnClick}>
          검사!
        </button>
      </form>
      <div>
        <p id="result" ref={resultRef} type="text">
          검사 결과! :
        </p>
      </div>
    </div>
  );
};

export default Check;
