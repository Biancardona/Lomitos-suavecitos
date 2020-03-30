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
  /*  },
    addElement: ()=> {
        const list = document.createElement('ul');
        const item = document.createElement('li');
       return list.appendChild(item);
       

    */
    }
}

export default Controller;