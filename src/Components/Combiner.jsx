import Button from "./Button.jsx";
import App from "./Todo.jsx";
import "./Combiner.css";
import { useState } from "react";

const title = "To do List";
export default function Mymain() {
  var [bColor, setbColor] = useState("container_white main");
  function changeColor() {
    if (bColor == "container_white main") setbColor("container_black main");
    else setbColor("container_white main");
  }
  return (
    <div className={bColor}>
      <Button
        bColor={bColor == "container_white main"}
        onPressed={changeColor}
      ></Button>
      <App button_border={bColor} title={<h1>{title}</h1>} />
    </div>
  );
}
