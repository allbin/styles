import { create } from 'zustand';
import { User } from './types/user';
import { fetchUsers } from './api_clients/users';

export type FetchStatus = 'unfetched' | 'fetched' | 'failed' | 'fetching';

export interface Store {
  users: {
    list: User[];
    by_id: Record<string, User>;
  };
  users_fetched: FetchStatus;
  users_error?: string;
  getUsers: () => void;
}

export const useStore = create<Store>((set, get) => ({
  users: {
    list: [],
    by_id: {},
  },
  users_fetched: 'unfetched',
  getUsers: async () => {
    const status = get().users_fetched;
    if (status === 'unfetched' || status === 'failed') {
      set({ users_fetched: 'fetching' });
      fetchUsers()
        .then((users) => {
          set({
            users_fetched: 'fetched',
            users: {
              by_id: users.reduce<Record<string, User>>((acc, u) => {
                acc[u.id] = u;
                return acc;
              }, {}),
              list: users,
            },
            users_error: undefined,
          });
        })
        .catch((err) => {
          set({
            users: {
              list: [],
              by_id: {},
            },
            users_error: err,
            users_fetched: 'failed',
          });
        });
    }
  },
}));
