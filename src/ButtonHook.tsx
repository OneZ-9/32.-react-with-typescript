import React from "react";

type ButtonProps = {};

export default function ButtonHook({ children, style, setCount }) {
  return <button style={style}>{children}</button>;
}
