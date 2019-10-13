import firebase from 'firebase';
import 'firebase/firebase';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDnRhmGUzoRBwVPKdL-CjGJsO-yMo6O_l8',
	authDomain: 'my-shop-53b11.firebaseapp.com',
	databaseURL: 'https://my-shop-53b11.firebaseio.com',
	projectId: 'my-shop-53b11',
	storageBucket: 'my-shop-53b11.appspot.com',
	messagingSenderId: '481564222775',
	appId: '1:481564222775:web:c59a53c4a4dfc0cd7866b2',
	measurementId: 'G-TKCM99EDGZ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Start a sign in process for an unauthenticated user.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// Using a popup.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
