import { createSelector } from "reselect";
import { RootState } from "../../redux/store";

// Example selector
const selectAuthDomine = (state: RootState) => state.auth;

export const selectIsAuthenticated = createSelector(
  [selectAuthDomine],
  (authDomain) => {
    return authDomain.isAuthenticated;
  }
);
