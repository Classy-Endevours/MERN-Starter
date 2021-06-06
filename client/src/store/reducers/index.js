import { combineReducers } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import login from '../../pages/auth/reducer';
import list from '../../pages/list/reducer';

const reducer = combineReducers({ login, list });
export default reducer;
