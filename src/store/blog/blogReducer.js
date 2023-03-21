import { SET_BLOG } from "./blogAction";

const initialState = {
  list: [],
};

export const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BLOG:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
};
