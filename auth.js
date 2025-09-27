// auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

// 電子郵件註冊
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// 電子郵件登入
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// 登出
export const logoutUser = () => {
  return signOut(auth);
};

// Google 登入
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Google 登入成功:", result.user);
    return result;
  } catch (error) {
    console.error("Google 登入失敗:", error);
    throw error;
  }
};

// Facebook 登入
export const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Facebook 登入成功:", result.user);
    return result;
  } catch (error) {
    console.error("Facebook 登入失敗:", error);
    throw error;
  }
};

// 更新用戶資料
export const updateUserProfile = (user, profile) => {
  return updateProfile(user, profile);
};

// 監聽登入狀態變化
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// 取得當前用戶
export const getCurrentUser = () => {
  return auth.currentUser;
};
