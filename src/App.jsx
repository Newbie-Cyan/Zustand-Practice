import AddTask from "./components/Addtask";
import Actions from "./components/Actions";
import DisplayTask from "./components/DisplayTask";

function App() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <AddTask />
      <Actions />
      <DisplayTask />
    </main>
  );
}

export default App;
