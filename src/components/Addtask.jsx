import { useState } from "react";
import tasksStore from "../store/tasksStore";

function AddTask() {
  const addTask = tasksStore((state) => state.addTask);
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTask(text)}>Add</button>
    </div>
  );
}

export default AddTask;
