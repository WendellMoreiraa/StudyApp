import { create } from "zustand";

export type UserProps = {
  name: string;
  email: string;
  adress: string;
};

type ActionsProps = {
  addUser: (user: UserProps) => void;
};

type StoreProps = {
  state: { users: UserProps[] };
  actions: ActionsProps;
};

export const useUserStore = create<StoreProps>((set) => ({
  state: {
    users: [],
  },
  actions: {
    addUser: (user) =>
      set((state) => ({ state: { users: [...state.state.users, user] } })),
  },
}));
