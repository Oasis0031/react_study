import { create } from "zustand";
import { combine } from "zustand/middleware";

// 기본구조
// const store = create(combine(
  // 상태하나, 
  // {
    // 초기상태값
    
  // },
  // 세터 하나
  // (set) => ({
    // setter
  // })
// ))

const useCountStore = create(combine(
  {
    count: 0
  },
  (set) => ({
    increase: () => set((state) => ({count: state.count + 1})),
    decrease: () => set((state) => ({count: state.count - 1}))
  })
))

export default useCountStore;