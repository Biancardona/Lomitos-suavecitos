import Utils from '../../utils/utils.js';

let Credvalidator = {
    
        //Registrar usuario
        createUser: (email, password) => {
            if (Utils.validateEmail(email) === true) {
                return firebase.auth().createUserWithEmailAndPassword(email, password)
            }
        }
    , signInUser: (email, password) => {
        if (Utils.validateEmail(email) === true) {
             return firebase.auth().signInWithEmailAndPassword(email, password)
        }
        const db = firebase.firestore();
    }
    
}

export default Credvalidator;