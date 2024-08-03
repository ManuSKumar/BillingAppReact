import store from "../../redux/store";
import { setUser } from "./redux";
import { auth } from "../../firebase";

// Listen for changes in the Firebase authentication state
auth.onAuthStateChanged((user) => {
  store.dispatch(setUser(user));
});
