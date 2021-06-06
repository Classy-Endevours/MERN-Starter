import { takeLatest } from 'redux-saga/effects';
import {
  login,
  register,
  getProfile,
  updateProfile,
} from '../../pages/auth/reducer';
import {
  loginSaga,
  registerSaga,
  profileSaga,
  updateProfileSaga,
} from '../../pages/auth/saga';
import { getList } from '../../pages/list/reducer';
import { listSaga } from '../../pages/list/saga';

export default function* watcherSagas() {
  yield takeLatest(updateProfile.type, updateProfileSaga);
  yield takeLatest(register.type, registerSaga);
  yield takeLatest(getProfile.type, profileSaga);
  yield takeLatest(login.type, loginSaga);
  yield takeLatest(getList.type, listSaga);
}
