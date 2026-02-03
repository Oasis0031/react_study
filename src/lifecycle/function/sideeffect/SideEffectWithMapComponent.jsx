// import React from 'react';

// const SideEffectWithMapComponent = ({users}) => {
//   return (
//     <div>
//       {users.map((users) => (<p key={users.id}>{users.name}</p>))}
//     </div>
//   );
// };

// export default SideEffectWithMapComponent; 

import React from 'react';

const UserName = ({name}) => {
  return (
    <p>{name}</p>
  );
};

export default UserName;