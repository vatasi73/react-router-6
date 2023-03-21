import { combineReducers } from "redux";
import { blogReducer } from "./blog/blogReducer";
import { detailsPostReducer } from "./singlepage/singlepageReducer";

export const rootReducer = combineReducers({
  blogPost: blogReducer,
  postDetails: detailsPostReducer,
});
