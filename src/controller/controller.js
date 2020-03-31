import Utils from '../../utils/utils.js';

let Controller = {

    createUser: (email, password) => {
        if (Utils.validateEmail(email) === true) {
            return firebase.auth().createUserWithEmailAndPassword(email, password)
        }
    },
    signInUser: (email, password) => {
        if (Utils.validateEmail(email) === true) {
            return firebase.auth().signInWithEmailAndPassword(email, password)
        }
    },
    addPost: (uid, postUser) => {
        const db = firebase.firestore();
        return db.collection(uid).add({
            text: postUser,
        })
    },
    getPost: (uid) => {
        const db = firebase.firestore();
       return db.collection(uid).get();
   },
    deletePost: (uid, docRefId) => {
        const db = firebase.firestore();
       return db.collection(uid).doc(docRefId).delete();
    }
}
export default Controller;