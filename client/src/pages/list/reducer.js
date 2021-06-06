/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userListSlice = createSlice({
  name: 'userList',
  initialState: {
    list: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    getListSuccess: (state, action) => {
      return {
        ...state,
        list: action.payload.data,
        isSuccess: true,
        isLoading: false,
        isError: false,
      };
    },
    getList: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    getListFailed: (state) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    },
  },
});

export const { getList, getListFailed, getListSuccess } = userListSlice.actions;

export default userListSlice.reducer;
