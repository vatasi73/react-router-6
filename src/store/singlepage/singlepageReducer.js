import { SET_SINGLEPOST } from "./singlepageAction";

const initialState = {
  currentPost: null,
};

export const detailsPostReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SINGLEPOST:
      return {
        ...state,
        currentPost: payload,
      };
    default:
      return state;
  }
};
