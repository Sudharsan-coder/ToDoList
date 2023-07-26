import "./button.css";

export default function Button(obj) {
  return (
    <>
      <label className={obj.bColor ? "switch_white" : "switch_black"}>
        <input type="checkbox" onClick={obj.onPressed}></input>
        <span className="slider round"></span>
      </label>
    </>
  );
}
