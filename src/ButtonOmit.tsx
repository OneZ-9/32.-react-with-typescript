import React from "react";

type User = {
  sessionId: string;
  name: string;
};

type Guest = Omit<User, "name">;

export default function ButtonOmit() {
  return <button>Click me!</button>;
}
