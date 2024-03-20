import { Dispatch } from "redux";
import { SET_AI_DATA } from "./constants";
import fetchAiData from "../api";

// Define the types for your actions
interface SetAIDataAction {
  type: typeof SET_AI_DATA;
  payload: any; // Replace 'any' with the actual type of your AI data
}

// Define action creators with correct typings
export const fetchData = () => {
  return (dispatch: Dispatch<SetAIDataAction>) => {
    fetchAiData()
      .then((data) => {
        dispatch(setAIData(data));
      })
      .catch((error) => {
        console.error("Error fetching AI data:", error);
        // Handle error if needed
      });
  };
};

export const setAIData = (data: any): SetAIDataAction => ({
  type: SET_AI_DATA,
  payload: data,
});
