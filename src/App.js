import React, { useState } from "react";
import "./styles/index.css";
import Column from "./Column";
let data = [
  {
    title: "Todo",
    cards: ["Test !"],
  },
  {
    title: "Doing",
    cards: ["Test 2"],
  },
  {
    title: "Done",
    cards: ["Test 3"],
  },
];

function App() {
  const [colData, setcolData] = useState(data);

  let columnns = colData.map((el) => {
    return <Column data={el} change={setcolData} />;
  });
  return <div className="App">{columnns}</div>;
}

export default App;
