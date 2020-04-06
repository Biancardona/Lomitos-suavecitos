import Controller from '../../controller/controller.js';
import Utils from '../../utils/utils.js';
let Login = {

        render: async () => {
                return /*html*/ `
            <section class="section-one">
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
                        <input class="input" id="pass_input" type="password" placeholder="Enter your Password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-primary" id="login_submit_btn">
                        Login
                        </button>
                    </p>
                </div>
    
            </section>
        `
            }
            // All the code related to DOM interactions and controls go in here.
            // This is a separate call as these can be registered only after the DOM has been painted
            , after_render: async () => {
            document.getElementById("login_submit_btn").addEventListener("click", () => {
                    let email = document.getElementById("email_input");
                    let pass = document.getElementById("pass_input");
                    if (email.value == '' | pass.value == '') {
                        alert(`The fields cannot be empty`)
                    } else if (Utils.validateEmail === false) {
                        window.location.hash = '/login';
                        alert('Please enter an email');
                        window.location.hash = '/login';
                        alert('Please enter the password');
                    } else {
                        Controller.signInUser(email.value, pass.value)
                            .then(() => {
                                window.location.hash = '/'
                            })
                            .catch(function (error) {
                                window.location.hash = '/login';
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                console.log(errorCode);
                                console.log(errorMessage);
                            })
                    }
                })
            }
        }
        export default Login;