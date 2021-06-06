/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const storeDataIntoLocalStorage = ({ token, role }) => {
  if (token) localStorage.setItem('authToken', token);
  if (role) localStorage.setItem('role', role);
};

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isSuccess: false,
    isFailed: false,
    isLoading: false,
    isLogout: false,
    data: {},
  },
  reducers: {
    login: (state) => {
      return {
        ...state,
        isLoading: true,
        isLogout: false,
      };
    },
    getProfile: (state) => {
      return {
        ...state,
        isLoading: true,
        isLogout: false,
      };
    },
    updateProfile: (state) => {
      return {
        ...state,
        isLoading: true,
        isLogout: false,
      };
    },
    register: (state) => {
      return {
        ...state,
        isLoading: true,
        isLogout: false,
      };
    },
    logout: (state) => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('role');
      return {
        ...state,
        isLogout: true,
      };
    },
    loginSuccess: (state, action) => {
      storeDataIntoLocalStorage(action.payload.data);
      return {
        ...state,
        data: action.payload.data,
        isSuccess: true,
        isFailed: false,
        isLogout: false,
        isLoading: false,
      };
    },
    loginFailed: (state) => {
      return {
        ...state,
        isSuccess: false,
        isFailed: true,
        isLogout: false,
        isLoading: false,
      };
    },
  },
});

export const {
  login,
  loginFailed,
  loginSuccess,
  register,
  logout,
  getProfile,
  updateProfile,
} = loginSlice.actions;

export default loginSlice.reducer;
