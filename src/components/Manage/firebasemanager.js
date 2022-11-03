import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,sendEmailVerification,signOut} from "firebase/auth";
import {auth} from './firebase.config';

export const CreateUser = (name,email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          return sendEmailVerification(auth.currentUser)
          .then(() => {
            alert('email sent successfully.Verify your email and logged In.')
          });
        }).catch((error) => {
          alert('name update failed: ' + error)
        });
      })
      .catch((error) => {
        return error.message;
      });
}

export const logOut = () => {
 return signOut(auth).then(() => {
    return 'Log out successfully.'
  }).catch((error) => {
    return error
  });
}

export const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential.user.emailVerified) {
        return userCredential.user;
      }else{
        logOut()
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert('We have sent you an email. Please verify now.');
          })
          .catch(err => {
            alert(err.message)
          })
      }
    })
    .catch((error) => {
      return error.message;
    });
}