// import * as firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: 'AIzaSyCoi3AJRll0-Pjv7Yq58M8H-T5H8ccqcHo',
//   authDomain: 'abcd-7c8e4.firebaseapp.com',
//   databaseURL: 'https://abcd-7c8e4.firebaseio.com',
//   projectId: 'abcd-7c8e4',
//   storageBucket: 'abcd-7c8e4.appspot.com',
//   messagingSenderId: '229890758619',
//   appId: '1:229890758619:web:68075ca755c34f9cf139fe',
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export default firebase;

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCoi3AJRll0-Pjv7Yq58M8H-T5H8ccqcHo',
  authDomain: 'abcd-7c8e4.firebaseapp.com',
  databaseURL: 'https://abcd-7c8e4.firebaseio.com',
  projectId: 'abcd-7c8e4',
  storageBucket: 'abcd-7c8e4.appspot.com',
  messagingSenderId: '229890758619',
  appId: '1:229890758619:web:68075ca755c34f9cf139fe',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.d
export {firebase};
