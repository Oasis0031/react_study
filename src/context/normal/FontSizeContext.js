import { createContext, useState } from "react";

// 1. Context 생성 및 초기화
export const FontSizeContext = createContext({
  state: { fontSize: "" },
  actions: { setFontSize: () => {} },
});

// 2. provider 설정
export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("20px");

  //3. value 설정
  const value = {
    state: { fontSize },
    actions: { setFontSize },
  };

  return (
    <FontSizeContext.Provider value={value}>
      {children}
    </FontSizeContext.Provider>
  );
};
