"use strict";
import Utils from '../../utils/utils.js';


export const createUser = (email, password) => {
    if (Utils.validateEmail(email) === true){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });

    }
    

}