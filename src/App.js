import { Route, RouterProvider, Routes } from "react-router-dom";
import router from "./router/router";
import { RouteProvider } from "./context/expert/RouteContext";

//컴포넌트
function App() {
  // 라우터 제공자 선언
  return (
    <>
      <RouteProvider>
        <RouterProvider router={router} />
      </RouteProvider>
    </>
  );
}

export default App;
