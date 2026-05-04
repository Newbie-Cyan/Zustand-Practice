import tasksStore from "../store/tasksStore";

function DisplayTask() {
  const tasks = tasksStore((state) => state.tasks);
  const removeTask = tasksStore((state) => state.removeTask);
  const totalTask = tasks.length == 0 ? "" : tasks.length;

  return (
    <div>
      <h2>{`Tasks: ${totalTask}`}</h2>

      <div>
        {tasks.length == 0 ? (
          <span>no task yet..</span>
        ) : (
          <div>
            {tasks.map((task, index) => (
              <div key={index}>
                <span>{task}</span>
                <button onClick={() => removeTask(index)}>remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayTask;
