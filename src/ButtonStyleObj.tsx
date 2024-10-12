import React from "react";

type ButtonProps = {
  // style: {
  //   backgroundColor: string;
  //   fontSize: number;
  //   textColor: string;
  // };

  // We can get type from React for CSS out of the box instead declaring own object with all the properties
  // Then React will specify the object for us
  // Now we can pass any css property
  style: React.CSSProperties;
  children: React.ReactNode; // allows all types
};

export default function ButtonStyleObj({ style, children }: ButtonProps) {
  return <button style={style}>{children}</button>;
}
