import {call, put, takeLatest} from "redux-saga/effects";
import * as actions from "./appActions";
import * as db from "../database";

function* initialize(action) {
  try {
    yield call(db.init, action.params);
    yield put({ type: actions.APP_START_SUCCESS });
  } catch (e) {
    yield put({ type: actions.APP_START_FAILED, error: e });
  }
}

const appSagas = [
  takeLatest(actions.APP_START, initialize),
];

export default appSagas;
