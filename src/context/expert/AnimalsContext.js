import { createContext, useState } from "react";

// 1. 생성 
export const AnimalsContext = createContext({
  state: {animals: []},
  actions: {insert: () => {}, remove: () => {}}
})

// 2. 제공
export const AnimalsProvider = ({children}) => {
  
  const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"])
  const value = {
    state: {
      animals
    },
    actions: {
      insert: (animal) => {setAnimals(animals.concat(animal))},
      //매개변수를 animal로 받고, filter 메서드로 지워버리기
      //해당값만 없애는 방법?
      //이름을 비교해서 선택된 요소랑 이름이 맞지 않으면 남기기
      remove: (i) => {setAnimals(animals.filter((_, idx) => i !== idx))}
    }
  } 

  // 실습
  // insert 메서드를 완성하시오!

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}


