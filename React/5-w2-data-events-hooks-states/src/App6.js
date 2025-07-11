import { useRef } from "react";

export default function RefExamples() {
  const inputRef = useRef();
  const textAreaRef = useRef();
  const checkboxRef = useRef();
  const selectRef = useRef();
  const divRef = useRef();

  const handleCheckRefs = () => {
    console.log("1. Input value:", inputRef.current.value);
    console.log("2. Textarea value:", textAreaRef.current.value);
    console.log("3. Checkbox checked:", checkboxRef.current.checked);
    console.log("4. Selected option:", selectRef.current.value);
    console.log("5. Div content:", divRef.current.textContent);
    divRef.current.style.backgroundColor = "lightyellow";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Examples</h2>

      {/* 1. Input */}
      <div>
        <label>Text Input: </label>
        <input ref={inputRef} type="text" defaultValue="Hello" />
      </div>

      {/* 2. Textarea */}
      <div>
        <label>Textarea: </label>
        <textarea ref={textAreaRef} defaultValue="Type here..." />
      </div>

      {/* 3. Checkbox */}
      <div>
        <label>
          <input ref={checkboxRef} type="checkbox" defaultChecked />
          Accept terms
        </label>
      </div>

      {/* 4. Select */}
      <div>
        <label>Fruit: </label>
        <select ref={selectRef} defaultValue="apple">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
        </select>
      </div>

      {/* 5. Div */}
      <div
        ref={divRef}
        style={{
          marginTop: "10px",
          padding: "10px",
          border: "1px solid gray",
        }}
      >
        I am a div with some text inside.
      </div>

      {/* Button to log everything */}
      <button onClick={handleCheckRefs} style={{ marginTop: "10px" }}>
        Log & Update Elements
      </button>
    </div>
  );
}
