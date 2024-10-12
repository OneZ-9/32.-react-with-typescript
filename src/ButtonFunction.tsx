import React from "react";

type ButtonProps = {
  //   children: string | JSX.Element | JSX.Element[];
  children: React.ReactNode; // allows all types
  style: React.CSSProperties;
  onClick: (test: string) => number;
};

export default function ButtonFunction({
  children,
  style,
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
