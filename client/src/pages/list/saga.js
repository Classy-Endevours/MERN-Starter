import { put } from 'redux-saga/effects';
import axios from 'axios';
import { getListFailed, getListSuccess } from './reducer';
import { USER_FETCH_URL } from '../../constant/apiRoute';

const getList = async () => {
  const data = await axios.get(USER_FETCH_URL);
  return data;
};

function* listSaga() {
  try {
    const response = yield getList();
    if (!response.error) yield put(getListSuccess(response.data));
    else yield put(getListFailed(response));
  } catch (error) {
    yield put(getListFailed({ message: error.message }));
  }
}
export { listSaga };
export default {};
