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
    getPosts: (uid) => {
        const db = firebase.firestore();
        return db.collection(uid).get();
    },
    deletePost: (uid, docRefId) => {
        const db = firebase.firestore();
        return db.collection(uid).doc(docRefId).delete();
    },
    editPost: (uid, docRefId, postUser) => {
        const db = firebase.firestore();
        db.collection(uid).doc(docRefId);
        return editPost.update({
            text: postUser,
        })
    },
    getPost: (uid, docRefId) => {
        const db = firebase.firestore();
        return db.collection(uid).doc(docRefId).get();
    },
}
export default Controller;