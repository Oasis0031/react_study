import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

export const initialMember = {
  memberEmail: "",
  memberPassword: "",
  memberName: "",
};

const useAuthStore = create(
  persist(
    combine(
      //변수 리턴
      {
        isLogin: false,
        currentMember: initialMember,
        previousUrl: "/",
      },
      //함수 리턴
      (set) => ({
        setIsLogin: (loginStatus) =>
          set((state) => ({
             // ...state, 바꿀 값만 넣으면 되니 생략 가능
            isLogin: loginStatus,
          })),
        setCurrentMember: (member) =>
          set((state) => ({
            currentMember: member,
          })),
        setPreviousUrl: (url) =>
          set((state) => ({
            previousUrl: url,
          })),
      })),
    {
      name: "auth-store",
    }));

export default useAuthStore;
