import React from "react";

const ButtonTextOptions = [
  "Click me!",
  "Click me again!",
  "Click me one more time!",
] as const;

export default function ButtonAsConst() {
  return (
    <button>
      {ButtonTextOptions.map((option) => {
        return option;
      })}
    </button>
  );
}
