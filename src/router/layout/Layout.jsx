import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Main from '../main/Main';

const Layout = () => {

  const style = {marginRight: "4px"}
 const getRandomInt = () => {
    return Math.floor(Math.random() * 100)
  }

  return (
    <div>
      <header>
        <Link style={style} to={"/"}>메인</Link>
        <Link style={style} to={"/job"}>직업</Link>
        <Link style={style} to={"/detail/info"}>디테일</Link>
        <Link style={style} to={`/post/${getRandomInt()}`}>게시판</Link>
        <Link style={style} to={"/user"}>회원</Link>
        <Link style={style} to={"/notUser"}>회원전용</Link>


      </header>
      <main>
        {/*라우터에 등록된 children을 보여주는 태그*/}
        <Outlet />
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default Layout;