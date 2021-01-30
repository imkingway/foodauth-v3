import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCkJDDxHuN2qegiG1BHs8dad1Z8m_1UstA',
  authDomain: 'project-abc-a2bf5-default-rtdb.firebaseapp.com',
  databaseURL: 'https://project-abc-a2bf5-default-rtdb.firebaseio.com',
  projectId: 'project-abc-a2bf5',
  storageBucket: 'project-abc-a2bf5.appspot.com',
  messagingSenderId: '296337102866',
  appId: '1:296337102866:android:5b2eac551ffc19996360cb',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
