import { useState } from "react";
import tasksStore from "../store/tasksStore";

function AddTask() {
  const addTask = tasksStore((state) => state.addTask);
  const [text, setText] = useState("");

  return (
    <div>
      <input
        className="border-2 rounded-2xl"
        type="text"
        name="task"
        value={text}
        maxLength={50}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (text != "" && e.key == "Enter") {
            addTask(text);
            setText('')
          }
        }}
      />
      <button
        onClick={() => {
          if (text != "") {
            addTask(text);
            setText('')
          }
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
