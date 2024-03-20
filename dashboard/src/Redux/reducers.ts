import { SET_AI_DATA } from "./constants";

const initialState = {
  aiData: null,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AI_DATA:
      return {
        ...state,
        aiData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
