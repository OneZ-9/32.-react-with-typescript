import React, { useEffect } from "react";

type ButtonColor = "red" | "blue" | "green";

export default function ButtonTypeAssertion() {
  useEffect(() => {
    const previousButtonColor = localStorage.getItem(
      "buttonColor"
    ) as ButtonColor;
  }, []);

  return <button>Click me!</button>;
}
