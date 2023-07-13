import "./styles.css";
import Select from "./Components/Select";
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState<string>();
  const options = [
    {
      label: "Deva",
      value: "Deva",
    },
    {
      label: "Prasanth",
      value: "Prasanth",
    },
    {
      label: "Meera",
      value: "Meera",
    },
    {
      label: "Raj",
      value: "Raj",
    },
  ];
  return (
    <div className="App">
      <Select
        options={options}
        value={value}
        onValueChange={(value) => setValue(value)}
      />
    </div>
  );
}
