import { create } from "zustand";
import { persist } from "zustand/middleware";

const tasksStore = create(
  persist(
    (set) => ({
      tasks: [],
      filter: "All",

      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      removeTask: (id) =>
        set((state) => ({
          tasks: [state.tasks.filter((task) => task.id !== id)],
        })),
      clearAll: () => set(() => ({ tasks: [] })),
    }),
    { name: "tasks-storage" },
  ),
);

export default tasksStore;
