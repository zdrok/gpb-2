import { takeEvery } from "redux-saga/effects";

import { sagaServices } from "../actions";
import { sagaDetails } from "../actions";

export function* initSaga() {
  yield takeEvery("SAGA_SERVICES", sagaServices);
  yield takeEvery("SAGA_DETAILS", sagaDetails);
}
