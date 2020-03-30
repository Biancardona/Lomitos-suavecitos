import Credvalidator from '../../../controller/controller.js';

let Register = {

    render: async () => {
            return /*html*/ `
            <section class="section">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                    <input class="input" id="name_input" type="name" placeholder="Enter your complete Name">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                   </span>
                   <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                   </span>
               </p>
               </div>
               <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" id="email_input" type="email" placeholder="Enter your Email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="pass_input" type="password" placeholder="Enter a Password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" id="repeat_pass_input" type="password" placeholder="Enter the same Password again">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-primary" id="register_submit_btn">
                        Register
                        </button>
                    </p>
                </div>
            </section>
        `
        }
        // All the code related to DOM interactions and controls go in here.
        // This is a separate call as these can be registered only after the DOM has been painted
        ,
    after_render: async () => {
        document.getElementById("register_submit_btn").addEventListener("click", () => {
            let name = document.getElementById("name_input");
            let email = document.getElementById("email_input");
            let pass = document.getElementById("pass_input");
            let repeatPass = document.getElementById("repeat_pass_input");
            if (pass.value != repeatPass.value) {
                alert(`The passwords dont match`)
            } else if (name.value == '' | email.value == '' | pass.value == '' | repeatPass == '') {
                alert(`The fields cannot be empty`)
            } else {
                Credvalidator.createUser(email.value, pass.value)
                    .then(() => {
                        const user = firebase.auth().currentUser;
                        user.updateProfile({
                                displayName: name.value
                            })
                            .then(() => {
                                window.location.hash = 'home'
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode);
                        console.log(errorMessage);
                        window.location.hash = '/register'
                        alert(errorCode + errorMessage)
                    })
            }
        })
    }
}

export default Register;