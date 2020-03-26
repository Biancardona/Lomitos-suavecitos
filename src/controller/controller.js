import Utils from '../../utils/utils.js';

let Credvalidator = {

        //Registrar usuario
        createUser: (email, password) => {
            if (Utils.validateEmail(email) === true) {
                return firebase.auth().createUserWithEmailAndPassword(email, password)
                    
 

            }
        }
   /* , ignInUser: (email, password) => {
        if (Utils.validateEmail(email) === true) {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                    // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
        }
    }*/
}
export default Credvalidator;