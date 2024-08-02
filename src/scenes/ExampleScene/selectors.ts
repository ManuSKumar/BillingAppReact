import { createSelector } from "reselect";
import { RootState } from "../../redux/store";

// Example selector
const selectExampleState = (state: RootState) => state.example;

export const selectValue = createSelector(
  [selectExampleState],
  (exampleState) => {
    debugger;
    return exampleState.value;
  }
);
