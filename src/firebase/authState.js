import initFirebase from './initFirebase.js';

function setUp() {

    initFirebase();
    firebase.firestore();
    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            // User is signed in.
            window.user = user;
            const name = user.displayName;
            const email_user = user.email;
            const emailVerified = user.emailVerified;
            const photoURL = user.photoURL;
            const uid = user.uid;
        }
    })
}
export default setUp;