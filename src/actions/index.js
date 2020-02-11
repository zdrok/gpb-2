import { put } from "redux-saga/effects";

import backend from "../util/backend";

export const fetchServices = () => {
  return { type: "SAGA_SERVICES" };
};

export const fetchDetails = id => {
  return { type: "SAGA_DETAILS", payload: id };
};

export function* sagaServices() {
  try {
    let response = yield backend.get("/services");
    yield put({
      type: "FETCH_SERVICES",
      payload: response.data
    });
  } catch (error) {
    yield put({
      type: "FETCH_FAIL"
    });
  }
}

export function* sagaDetails(id) {
  try {
    let response = yield backend.get(`/services/${id.payload}`);
    yield put({
      type: "FETCH_DETAILS",
      payload: response.data
    });
  } catch (error) {
    yield put({
      type: "FETCH_FAIL"
    });
  }
}
