import { create } from "zustand";

type IStatus = "idle" | "loading" | "success" | "error";

interface IUserState {
  status: IStatus;
  message: string;
  setStatus: (status: IStatus, message?: string) => void;
}

export const useRequestStatusStore = create<IUserState>()((set) => ({
  status: "idle",
  message: "Solicitação realizada com sucesso!",
  setStatus: (status, message) => set({ status, message }),
}));
