import React from "react";

type bgColor = "red" | "blue" | "green" | "yellow" | "purple"; // union type
type textColor = "white" | "black"; // union type

type ButtonProps = {
  backgroundColor: bgColor;
  textColor: textColor;
  //   textColor: textColor[]; // custom type => array of textColors
  fontSize: number;
  pillShape?: boolean; // optional prop
  //   padding: number[]; // array of numbers
  padding: [number, number, number, number]; // tuple
  children: React.ReactNode; // allows all types
};

export default function ButtonGeneral({
  backgroundColor,
  fontSize,
  pillShape,
  textColor,
  padding,
  children,
}: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor,
        color: textColor,
        fontSize,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        borderRadius: pillShape ? `${50}px` : "",
      }}
    >
      {children}
    </button>
  );
}
