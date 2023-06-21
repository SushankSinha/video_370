import React from "react";
import ReactDOM from "react-dom";

//video no 368
// ReactDOM.render(<h1>Hey Sushank!</h1>, document.getElementById('root'));

//video no 369
// ReactDOM.render(
//   <div>
//     <h1>Hey Sushank!</h1>
//     <p>
//       This is a list of items!
//       <ul>
//         <li>Milk</li>
//         <li>Eggs</li>
//         <li>Bread</li>
//       </ul>
//     </p>
//   </div>,
//   document.getElementById("root")
// );

//video no 370

const fname = "Sushank";
const lname = "Sinha";
const luckyNumber = "7";

ReactDOM.render(
  <div>
    <h1>Hey {`${fname} ${lname}`}!</h1>
    <p>My Lucky Number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
