import tasksStore from "../store/tasksStore";

function Actions() {
  const setFilter = tasksStore((state) => state.setFilter);
  const clearAll = tasksStore((state) => state.clearAll);

  return (
    <div>
      <select name="filterTask" onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Completed">Com pleted</option>
      </select>

      <button onClick={()=> clearAll()}>Clear</button>
    </div>
  );
}

export default Actions;
