import { combineReducers } from "@reduxjs/toolkit";
import reviewReducer from "./reviewSlice/reviewSlice";

const rootReducer = combineReducers({
  review: reviewReducer
});

// React에서 사용할 수 있도록 타입을 만들어 export 해준다.
export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;