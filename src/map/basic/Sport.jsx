// import React from 'react';

// // 스포츠 경기 인원이 5명 이상인 스포츠만 화면에 출력
// const Sport = ({name, personnel}) => {
//   return (
//     <div>
//       {personnel >= 5 && <li>{name} (인원: {personnel}명)</li>}
//     </div>
//   );
// };

// export default Sport;

import React from 'react';

const Sports = ({name, personnel}) => {
  return (
    <li>
      <p>{name}: {personnel}명</p>
    </li>
  );
};

export default Sports;