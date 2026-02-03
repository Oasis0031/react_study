// // import React, { useEffect, useState } from "react";
// // import SideEffectWithMapComponent from "./SideEffectWithMapComponent";

// // const SideEffectWithMap = () => {
// //   // https://jsonplaceholder.typicode.com/users
// //   // useEffect()
// //   // username만 화면에 p태그로 출력하기 -> 컴포넌트로 분리

// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     const getNames = async () => {
// //       const response = await fetch(
// //         "https://jsonplaceholder.typicode.com/users",
// //       );
// //       const users = await response.json();
// //       return users;
// //     };

// //     getNames().then(setUsers).catch(console.error);
// //   }, []);

// //   return (
// //     <div>
// //       <SideEffectWithMapComponent users={users} />
// //     </div>
// //   );
// // };

// // export default SideEffectWithMap;

// import React, { useEffect, useState } from 'react';
// import UserName from './UserName';

// const SideEffectWithMap = () => {

//   // https://jsonplaceholder.typicode.com/users
//   // useEffect()
//   // username만 화면에 p태그로 출력하기 -> 컴포넌트로 분리
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     const getUsers = async () => {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users")
//       if(!response.ok) throw new Error("getUsers fetching error")
//       const users = await response.json()
//       console.log("요청")
//       return users
//     }
//     getUsers()
//       .then((users) => users.map(({username}) => username))
//       .then(setUsers)
//       .catch(console.error)
//   }, [])

//   const usernames = users.map((name, i) => (
//     <UserName key={i} name={name} />
//   ))

//   return (
//     <div>
//       {usernames}
//     </div>
//   );
// };

// export default SideEffectWithMap;

import React, { useEffect, useState } from 'react';
import UserName from './UserName';

const SideEffectWithMap = () => {

  // https://jsonplaceholder.typicode.com/todos
  // useEffect()
  // username만 화면에 p태그로 출력하기 -> 컴포넌트로 분리
  const [todos, settodos] = useState([])
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${number * 15}&_limit=15`)
      if(!response.ok) throw new Error("getTodos fetching error")
      const todos = await response.json()
      console.log("요청")
      return todos
    }
    getTodos()
      .then((todos) => todos.map(({title}) => title))
      .then(settodos)
      .catch(console.error)
  }, [number])

  const titles = todos.map((name, i) => (
    <UserName key={i} name={name} />
  ))

  const handleNumberOnClick = () => {
    setNumber(number + 1)
  }

  return (
    <div>
      <button onClick={handleNumberOnClick}>재요청!</button>
      {titles}
    </div>
  );
};

export default SideEffectWithMap;