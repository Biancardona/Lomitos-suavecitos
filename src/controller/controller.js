"use strict";
import Utils from '../../utils/utils.js';


export const createUser = (email, password) => {
    validatedEmail = Utils.validateEmail(email);
    console.log(validatedEmail);
}