import { combineReducers } from "redux";
import recentViewedReducer from "../reducer/recentViewedReducer";

const rootReducer = combineReducers({
  recentViewed: recentViewedReducer,
});

export default rootReducer;
