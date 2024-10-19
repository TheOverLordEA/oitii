import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  equity?: string;
  postedDate: string;
}

interface JobStore {
  jobs: Job[];
  selectedJob: Job | null;
  addJob: (job: Job) => void;
  updateJob: (id: string, updatedFields: Partial<Job>) => void;
  deleteJob: (id: string) => void;
  setSelectedJob: (job: Job | null) => void;
}

type JobStoreWithPersist = JobStore & {
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

const persistOptions: PersistOptions<JobStoreWithPersist> = {
  name: "job-storage",
  storage: createJSONStorage(() => localStorage),
  onRehydrateStorage: () => (state) => {
    if (state) {
      state.setHasHydrated(true);
    }
  },
};

export const useJobAppStore = create<JobStoreWithPersist>()(
  persist(
    (set, get) => ({
      jobs: [],
      selectedJob: null,
      addJob: (job) =>
        set((state) => ({
          jobs: [...state.jobs, job],
        })),
      updateJob: (id, updatedFields) =>
        set((state) => ({
          jobs: state.jobs.map((job) =>
            job.id === id ? { ...job, ...updatedFields } : job
          ),
        })),
      deleteJob: (id) =>
        set((state) => ({
          jobs: state.jobs.filter((job) => job.id !== id),
        })),
      setSelectedJob: (job) => set({ selectedJob: job }),
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    persistOptions
  )
);
