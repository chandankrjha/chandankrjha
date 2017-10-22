import {all} from "redux-saga/effects";
import appSagas from "./main/appSagas";

export default function* rootSaga() {
  yield all([
    ...appSagas,
  ])
}

