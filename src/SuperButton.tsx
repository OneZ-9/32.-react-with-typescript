import React from "react";

// type ButtonProps = {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue" | "green";
// };

// type SupperButtonProps = ButtonProps & {
//   size: "md" | "lg";
// };

interface ButtonProps {
  type: "button" | "submit" | "reset";
  color: "red" | "blue" | "green";
}

interface SupperButtonProps extends ButtonProps {
  size: "md" | "lg";
}

export default function Button({ type, color }: ButtonProps) {
  return <button>Click me!</button>;
}
