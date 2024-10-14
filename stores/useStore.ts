// src/stores/useStore.ts
import { create } from "zustand";

type Task = {
  id: string;
  title: string;
  description?: string;
  status: string;
};

type StoreState = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

const useStore = create<StoreState>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));

export default useStore;
