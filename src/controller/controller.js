import Utils from '../utils/utils.js';

let Controller = {
    getUser: (cb) => {
        firebase.auth().onAuthStateChanged(cb);
    },

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
    singOut: () => {
        firebase.auth().signOut()
    },
    addPost: (post, postUser, postText, emailUser) => {
        const db = firebase.firestore();
        return db.collection(post).add({
            uid: postUser,
            text: postText,
            email: emailUser,
        })
    },
    getAllPosts: (post) => {
        const db = firebase.firestore();
        return db.collection(post).get();
    },
    getUserPosts: (post, userUid) => {
        const db = firebase.firestore();
        return db.collection(post).where('uid','==', userUid).get();
    },
    deletePost: (post, docRefId) => {
        const db = firebase.firestore();
        return db.collection(post).doc(docRefId).delete();
    },
    editPost: (post, docRefId, postUser) => {
        const db = firebase.firestore();
        return db.collection(post).doc(docRefId).update({
            text: postUser,
        });
    },
    getPost: (post, docRefId) => {
        const db = firebase.firestore();
        return db.collection(post).doc(docRefId).get();
    },
}
export default Controller;