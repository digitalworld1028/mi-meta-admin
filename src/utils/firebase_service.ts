// firebase.utils.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";


    const firebaseConfig = {
        apiKey: "AIzaSyCYKGX9KBgvVRe4CTJ25L_NKtcjNtepn-A",
        authDomain: "mi-meta-352008.firebaseapp.com",
        projectId: "mi-meta-352008",
        storageBucket: "mi-meta-352008.appspot.com",
        messagingSenderId: "471641417365",
        appId: "1:471641417365:web:a080d465ea6fc5bf1edd9c",
        measurementId: "G-KDX1M1P5Y1"
      };
    
    const app = initializeApp(firebaseConfig);
    
    // Initialize Firebase Authentication and get a reference to the service
    export const auth = getAuth(app);
    
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    export const singInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
    







// export default googleService;


