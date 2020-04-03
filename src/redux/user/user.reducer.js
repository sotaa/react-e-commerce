import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === UserActionTypes.SET_CURRENT_USER) {
    return {
      ...state,
      currentUser: action.payload,
    };
  } else {
    return state;
  }
};

export default userReducer;
