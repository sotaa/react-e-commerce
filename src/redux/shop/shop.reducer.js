import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ShopActionTypes.FETCH_COLLECTIONS_START) {
    return {
      ...state,
      isFetching: true,
    };
  } else if (action.type === ShopActionTypes.FETCH_COLLECTIONS_SUCCESS) {
    return {
      ...state,
      isFetching: false,
      collections: action.payload,
    };
  } else if (action.type === ShopActionTypes.FETCH_COLLECTIONS_FAILURE) {
    return {
      ...state,
      isFetching: false,
      errorMessage: action.payload,
    };
  } else {
    return state;
  }
};

export default shopReducer;
