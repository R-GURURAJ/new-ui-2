
import { createAction } from '@reduxjs/toolkit';
import { auth } from "../../components/Login/firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";



export const authentication = createAction('chat/authentication');

export const login = (email,password) => {
  return async (dispatch) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const { user } = userCredential;
        dispatch(authentication({ uid:user.uid }));
        return { uid: user.uid};
    } catch (error) {
        console.error('Authentication error', error);
    }
  };
};
export const register=(email,password)=>{
  return async(dispatch)=>{
    try {
      const userCredential = await await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;
      return { uid: user.uid};
  } catch (error) {
      console.error('Authentication error', error);
  }
  } 
}
