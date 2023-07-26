import { useState, useEffect } from "react";
import "./Todo.css";

export default function App(obj) {
  var initial_todo_list_values;
  if (JSON.parse(localStorage.getItem("obj")) != null)
    initial_todo_list_values = [...JSON.parse(localStorage.getItem("obj"))];
  else initial_todo_list_values = [];

  var [items, setItem] = useState(initial_todo_list_values); //add the items [value,b,id]
  var [content, setTemp] = useState(""); //current item
  var arr = [...items];
  var [uid, setuid] = useState(1); //to give id for the items
  var [removedItems, setRemoveItem] = useState([]); //remove the items

  useEffect(() => {
    localStorage.setItem("obj", JSON.stringify(items));
  }, [items]);

  const a =
    arr.length != 0
      ? arr.map((item, index) => {
          if (!removedItems.includes(item))
            return (
              <div className="todo_list_values" key={index}>
                <input
                  key={item.id}
                  type="checkbox"
                  checked={item.b ? true : false}
                  onChange={() => {
                    arr[index].b = !arr[index].b;
                    setItem(arr);
                  }}
                />
                <li key={item.value}>
                  {item.b ? <del> {item.value} </del> : <> {item.value} </>}
                </li>
                <button
                  className={`buttons_on_todo ${
                    obj.button_border == "container_white main"
                      ? "white_border"
                      : "black_border"
                  }`}
                  onClick={() => {
                    setRemoveItem([...removedItems, item]);
                    arr.splice(index, 1);
                    setItem(arr);
                    console.log(arr);
                  }}
                >
                  delete
                </button>
              </div>
            );
        })
      : null;

  return (
    <fieldset style={{ padding: "10px" }}>
      <legend>{obj.title}</legend>
      <input
        type="text"

        onChange={(event) => {
          setTemp(event.target.value);
        }}
        value={content}
      ></input>
      <button
        className={`buttons_on_todo ${
          obj.button_border == "container_white main"
            ? "white_border"
            : "black_border"
        }`}
        onClick={() => {
          arr.push({ value: content, b: false, id: uid });
          setuid(uid + 1);
          console.log(arr);
          setTemp("");
          setItem(arr);
        }}
      >
        add
      </button>
      <button
       className={`buttons_on_todo ${
        obj.button_border == "container_white main"
          ? "white_border"
          : "black_border"
      }`}
        onClick={() => {
          localStorage.setItem("obj", null);
          setItem([]);
        }}
      >
        clear all{" "}
      </button>
      <ol>{a}</ol>
    </fieldset>
  );
}
