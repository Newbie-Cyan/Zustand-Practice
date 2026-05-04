import { create } from "zustand";
import { persist } from "zustand/middleware";

const tasksStore = create(
  persist(
    (set) => ({
      tasks: [],
      filter: "All",

      addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
      removeTask: (index) =>
        set((state) => ({
          tasks: state.tasks.filter((task, i) => i !== index),
        })),
      clearAll: () => set(() => ({ tasks: [] })),
      setFilter: (filter) => set({ filter }),
    }),
    { name: "tasks-storage" },
  ),
);

export default tasksStore;
