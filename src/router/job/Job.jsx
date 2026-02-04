import React from "react";
import { Link } from "react-router-dom";

const Job = () => {
  return (
    <div>
      {/*
        구분점!
        *path를 통해서도 값을 넘길 수 있다.
        1. Query String  
        2. Path Variable
      */
      
      }
      <Link to={"/"}>메인 페이지로 이동</Link>
      <Link style={{display: "block"}} to={"/intro?job=developer"}>개발자 소개페이지로 이동</Link>
      <Link style={{display: "block"}} to={"/intro?job=police"}>경찰관 소개페이지로 이동</Link>
      <Link style={{display: "block"}} to={"/intro?job=firefighter"}>소방관 소개페이지로 이동</Link>
    </div>
  );
};

export default Job;
