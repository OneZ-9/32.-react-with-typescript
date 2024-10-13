import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function ButtonHook({
  children,
  style,
  //   setCount = 0, // if we assigned default vaule, then type specification not required
  setCount,
}: ButtonProps) {
  return (
    <button onClick={() => setCount((count) => count + 1)} style={style}>
      {children}
    </button>
  );
}
