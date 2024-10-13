import React, { useState } from "react";

type User = {
  name: string;
  age: number;
};

export default function ButtonHook() {
  const [user, setUser] = useState<User | null>(null);

  const name = user?.name;

  return <button>Click me!</button>;
}
