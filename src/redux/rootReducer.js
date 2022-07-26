import { combineReducers } from "redux";
import { participantsReducer } from "./participantsReducer";

export const rootReducer = combineReducers({
  participants: participantsReducer

})