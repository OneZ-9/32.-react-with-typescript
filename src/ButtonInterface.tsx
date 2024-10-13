import React from "react";

// Interface explains objects
// We cannot specify union types or other than object with interface
// So, more often we use type alias instead interface

// interface ButtonProps {
//   text: string;
//   count: number;
// }

// type ButtonProps = {
//   text: string;
//   count: number;
// };

export default function ButtonInterface() {
  return <button>Click me!</button>;
}
