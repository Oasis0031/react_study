import { createBrowserRouter } from "react-router-dom";
import Community from "../detail/Community";
import Detail from "../detail/Detail";
import DetailLayout from "../detail/DetailLayout";
import NotUser from "../user/NotUser";
import User from "../user/User"; // 폴더 내 파일 존재 여부 확인 필수
import AuthLayout from "../zustand/AuthLayout";
import Zustand01 from "../zustand/Zustand01";
import Zustand02 from "../zustand/Zustand02";
import Zustand03 from "../zustand/Zustand03";
import ZustandLayout from "../zustand/ZustandLayout";
import Intro from "./intro/Intro";
import Job from "./job/Job";
import Layout from "./layout/Layout";
import Main from "./main/Main";
import NotFound from "./notfound/Notfound"; // 폴더명 소문자 주의
import Post from "./post/Post";
import SignUp from "../hooks/SignUp";

// 구분점!
// ※path를 통해서도 값을 넘길 수 있다.
// 1. Query String -> useSearchParams
// 2. Path Variable -> /path/:변수명

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "/intro",
        element: <Intro />,
      },
      {
        path: "/job",
        element: <Job />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/detail",
        element: <DetailLayout />,
        children: [
          {
            path: "",
            element: <Detail />,
          },
          {
            path: "community",
            element: <Community />,
          },
        ],
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/not-user",
        element: <NotUser />,
      },
    ],
  },
  {
    path: "/zustand",
    element: <ZustandLayout />,
    children: [
      {
        path: "01",
        element: <Zustand01 />
      },
      {
        path: "02",
        element: <Zustand02 />
      },
      {
        path: "03",
        element: <AuthLayout />,
        children:[
          {
            path: "",
            element: <Zustand03 />
          }
        ]
      },
    ]
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
