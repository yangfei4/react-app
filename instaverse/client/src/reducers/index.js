import { combineReducers } from "redux";

import storyReducer from "./stories";

export default combineReducers({
    stories: storyReducer
});