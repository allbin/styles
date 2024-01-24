import axios from 'axios';
import { User } from '../types/user';

export const fetchUsers = () => {
  return axios.get<User[]>('/users').then(({ data, status }): User[] => {
    if (status !== 200) {
      throw new Error(status.toString());
    }
    return data;
  });
};
