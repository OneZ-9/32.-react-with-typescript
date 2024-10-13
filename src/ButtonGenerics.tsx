import React from "react";

// With function expressions we have to specify type parameter as <T,>
// const convertToArray = <T,>(value: T): T[] => {
//   return [value];
// };

// function convertToArray<T>(value: T): T[] {
//   return [value];
// }

// convertToArray(5);
// convertToArray("Hello");

type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

export default function ButtonGenerics<T>({
  countValue,
  countHistory,
}: ButtonProps<T>) {
  return <button>Click me!</button>;
}
