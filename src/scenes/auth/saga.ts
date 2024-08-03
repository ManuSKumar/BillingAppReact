import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { auth } from "../../firebase";
import { login, setUser, setError, logout, signUp, loadData } from "./redux";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";
import firebase from "firebase/compat/app";

function* onLogin(action: ReturnType<typeof login>) {
  try {
    const { email, password } = action.payload;
    yield call(() => auth.signInWithEmailAndPassword(email, password));
    yield put(setUser({ email: email }));
    yield call(() => redirect("home"));
    sessionStorage.setItem("userInfo", email);
  } catch (error) {
    console.error("Login failed", error);
    yield call(() =>
      toast.error("Failed to log in. Please check your email and password.")
    );
    yield put(
      setError("Failed to log in. Please check your email and password.")
    );
  }
}

function* onSignUp(action: ReturnType<typeof signUp>) {
  const { email, password } = action.payload;
  try {
    yield call(() => auth.createUserWithEmailAndPassword(email, password));
    yield put(setUser({ email: email }));
    yield call(() =>
      toast.success("User Created Successfully. Please Login to continue.")
    );
    sessionStorage.setItem("userInfo", email);
  } catch (error) {
    yield call(() => toast.error("SignUp Failed!"));
    yield put(
      setError("Failed to sign up. Please check your email and password.")
    );
  }
}
function* onLogout() {
  try {
    yield call(() => auth.signOut());
    yield put(logout());
    sessionStorage.removeItem("userInfo");
  } catch (error) {
    console.error("Logout failed", error);
    // Optional: Handle logout error if needed
  }
}

function* onLoad() {
  try {
    const userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      yield put(setUser({ email: userInfo }));
    }
  } catch (error) {
    console.error("Logout failed", error);
  }
}

export function* watchAuthSaga() {
  yield takeLatest(login, onLogin);
  yield takeLatest(logout, onLogout);
  yield takeLatest(signUp, onSignUp);
  yield takeLatest(loadData, onLoad);
}
