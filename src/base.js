import Rebase from 're-base';
import firebase from 'firebase';

// firebase app
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBSEHqp5B3yLQiOECS_pid9ZgCMxauq4sQ',
  authDomain: 'catch-of-the-day-9d089.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-9d089.firebaseio.com'
});

// bindings
const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
