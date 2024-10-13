import { useState } from "react";
import "./App.css";
import ButtonFunction from "./ButtonFunction";
import ButtonGeneral from "./ButtonGeneral";
import ButtonRecord from "./ButtonRecord";
import ButtonStyleObj from "./ButtonStyleObj";
import ButtonHook from "./ButtonHook";
import ButtonAttributes from "./ButtonAttributes";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <ButtonGeneral
        backgroundColor="green"
        fontSize={30}
        textColor="white"
        padding={[12, 20, 12, 20]}
        pillShape={true}
      >
        Click me!
      </ButtonGeneral>

      <ButtonStyleObj
        style={{
          backgroundColor: "blue",
          fontSize: "30px",
          color: "white",
          padding: "12px 20px 12px 20px",
          borderRadius: "10px 20px 10px 20px",
          margin: "10px 20px",
        }}
      >
        Click me!
      </ButtonStyleObj>

      <ButtonRecord
        onClick={() => {
          alert("Button clicked!");
        }}
        borderRadius={{
          topLeft: 0,
          topRight: 15,
          bottomRight: 15,
          bottomLeft: 0,
        }}
      >
        Click me!
      </ButtonRecord>

      <ButtonFunction
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClick={(test: string) => {
          return 5;
        }}
        style={{
          backgroundColor: "purple",
          fontSize: "30px",
          color: "white",
          padding: "12px 20px 12px 20px",
          borderRadius: "10px 10px 10px 10px",
          margin: "10px 20px",
        }}
      >
        Click me!
      </ButtonFunction>

      <ButtonHook
        setCount={setCount}
        style={{
          backgroundColor: "red",
          fontSize: "30px",
          color: "white",
          padding: "12px 20px 12px 20px",
          borderRadius: "50px",
          margin: "10px 20px",
        }}
      >
        Count: {count}
      </ButtonHook>

      <ButtonAttributes type="submit" autoFocus={true} />
    </>
  );
}

export default App;
