// Initialize Firebase
const config = {
  apiKey: "AIzaSyDS1T1Bb_BtvA5t0JAJqN28xgU281bm6_A",
  authDomain: "anuar-blog.firebaseapp.com",
  databaseURL: "https://anuar-blog.firebaseio.com",
  projectId: "anuar-blog",
  storageBucket: "anuar-blog.appspot.com",
  messagingSenderId: "1084185075037"
};
firebase.initializeApp(config);

const database = firebase.database();
