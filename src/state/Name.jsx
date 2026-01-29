import React,{useState} from 'react';

const Name = () => {

  const [name, setName] = useState()
  const handleNameChange = (e) => {
    setName(e.target.value)
  }


   console.log("리렌더링")

  return (
    <div>
      <p>{name}</p>
      <input type="text" onChange={handleNameChange} />
    </div>
  );
};

export default Name;