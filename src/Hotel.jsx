import React from "react";

// const Hotel = (room) => {
//   return (
//     <div>
//       <h2>Ur room number is {room.number}</h2>
//       <p>
//         {room.cleaner} will show u everything at {room.time}
//       </p>
//     </div>
//   );
// };

const Hotel = ({ number, cleaner, time }) => {
  return (
    <div>
      <h2>Ur room number is {number}</h2>
      <p>
        {cleaner} will show u everything at {time}
      </p>
    </div>
  );
};

export default Hotel;
