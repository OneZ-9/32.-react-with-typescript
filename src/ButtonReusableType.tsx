import React from "react";
import { type Color } from "./lib/types";

type ButtonProps = {
  color: Color;
};

export default function ButtonReusableType({ color }: ButtonProps) {
  return <button>Click me!</button>;
}
