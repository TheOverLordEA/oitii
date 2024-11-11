import { create } from "zustand";

interface SignupStore {
  email: string | null;
  setEmail: (email: string) => void;
}

export const useSignupStore = create<SignupStore>((set) => ({
  email: null, // initial value of email is null
  setEmail: (email) => set({ email }), // method to set the email
}));
