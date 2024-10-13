import React, { useEffect } from "react";

export default function ButtonUnknownType() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("");
      const data: unknown = await res.json();
      // run data through zod
      // const movies = movieSchema.parse(data);

      // return movies;
    }
    fetchData();
  }, []);

  return <button>Click me!</button>;
}
