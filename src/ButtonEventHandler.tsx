import React from "react";

export default function ButtonEventHandler() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  };

  return <button onClick={handleClick}>Click me!</button>;
}
