import React from "react";

type ButtonProps = {
  //   borderRadius: {
  //     topLeft: number;
  //     topRight: number;
  //     bottomLeft: number;
  //     bottomRight: number;
  //   };

  // instead of specifically defining what are the keys and values,
  // we can only specify only type of the keys and values
  borderRadius: Record<string, number>;
  onClick: () => void;
  children: React.ReactNode;
};

export default function ButtonRecord({
  children,
  borderRadius,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: `${borderRadius.topLeft}px ${borderRadius.topRight}px 
        ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px`,
      }}
    >
      {children}
    </button>
  );
}
