import React, { useState } from 'react';

const Attendance = ({name, isPresent}) => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClicker = () => {
    setIsClicked(!isClicked)
  }

  return (
    <li onClick={handleClicker} style={{color : isClicked ? 'blue' : '' }}>이름: {name}({isPresent ? "출석" : "결석"})</li>
  );
};

export default Attendance;