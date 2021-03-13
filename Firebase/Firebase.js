import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzJ3Q3Mk448zFrfHLieheYnYL6Q7WQw98",
  authDomain: "testapp-1cfea.firebaseapp.com",
  projectId: "testapp-1cfea",
  storageBucket: "testapp-1cfea.appspot.com",
  messagingSenderId: "806881121779",
  appId: "1:806881121779:web:c32bb97f78d05d01536e86",
  measurementId: "G-W8VE6TWEJ9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
