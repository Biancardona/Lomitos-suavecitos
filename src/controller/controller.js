import Utils from '../../utils/utils.js';

let Credvalidator = {

    //Registrar usuario
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
    addPost: (postUser) => {
        const db = firebase.firestore();
        return db.collection('post').add({
            descripcion: postUser,
        })
    },
    getPost: () => {
        const docRef = db.collection('post');
       return docRef.get({
        })
    }

}

export default Credvalidator;