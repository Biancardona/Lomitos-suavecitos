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
        db.collection('post').add({
                descripcion: postUser,
            })
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
                console.log('Save' + postToSave + 'to Firestore');
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

}

export default Credvalidator;