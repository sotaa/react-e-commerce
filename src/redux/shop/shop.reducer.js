import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ShopActionTypes.UPDATE_COLLECTIONS) {
    return {
      ...state,
      collections: action.payload,
    };
  } else {
    return state;
  }
};

export default shopReducer;
