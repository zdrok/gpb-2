import { combineReducers } from "redux";

const servicesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SERVICES":
      return action.payload;
    default:
      return state;
  }
};

const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

const errorReducer = (state = false, action) => {
  switch (action.type) {
    case "FETCH_FAIL":
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  services: servicesReducer,
  details: detailsReducer,
  error: errorReducer
});
