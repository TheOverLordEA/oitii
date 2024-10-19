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
  selectedJob: Job | null;
  setSelectedJob: (job: Job) => void;
}

type JobStoreWithPersist = JobStore & {
  _hasHydrated: boolean; // Tracks if hydration is complete
  setHasHydrated: (state: boolean) => void; // Sets the hydration state
};

// Persist options
const persistOptions: PersistOptions<JobStoreWithPersist> = {
  name: "job-storage",
  storage: createJSONStorage(() => localStorage),
  onRehydrateStorage: () => (state) => {
    if (state) {
      state.setHasHydrated(true); // Set _hasHydrated to true when the store is rehydrated
    }
  },
};

// Zustand store with persist and hydration handling
export const useJobStore = create<JobStoreWithPersist>()(
  persist(
    (set) => ({
      selectedJob: null,
      setSelectedJob: (job) => set({ selectedJob: job }),
      _hasHydrated: false, // Initial state for hydration
      setHasHydrated: (state: boolean) => set({ _hasHydrated: state }), // Function to set hydration state
    }),
    persistOptions
  )
);

// import { create } from "zustand";
// import { persist, PersistOptions } from "zustand/middleware";
// import { createJSONStorage } from "zustand/middleware";

// interface Job {
//   id: string;
//   title: string;
//   company: string;
//   logo: string;
//   location: string;
//   salary: string;
//   equity?: string;
//   postedDate: string;
// }

// interface JobStore {
//   selectedJob: Job | null;
//   setSelectedJob: (job: Job) => void;
// }

// type JobStoreWithPersist = JobStore & {
//   _hasHydrated: boolean;
//   setHasHydrated: (state: boolean) => void;
// };

// const persistOptions: PersistOptions<JobStoreWithPersist> = {
//   name: "job-storage",
//   storage: createJSONStorage(() => localStorage),
// };

// export const useJobStore = create<JobStoreWithPersist>()(
//   persist(
//     (set) => ({
//       selectedJob: null,
//       setSelectedJob: (job) => set({ selectedJob: job }),
//       _hasHydrated: false,
//       setHasHydrated: (state) => set({ _hasHydrated: state }),
//     }),
//     persistOptions
//   )
// );
