//import Credvalidator from '../../controller/controller.js';
let Home = {
 render : async () => {
    return /*html*/ `
     <section class="section">
     <div class="field">
         <p class="control has-icons-left has-icons-right">
             <button class="buttons" type="submit" id="btnClosed"><a href="#/home">Sign Out</a></button></br>
             <span class="icon is-small is-left">
                 <i class="fas fa-envelope"></i>
             </span>
             <span class="icon is-small is-right">
                 <i class="fas fa-check"></i>
             </span>
         </p>
     </div>
         <section class="section">

             <h1> Welcome </h1>
             <h3 class="text-user"></h3>
             <form id="form-addPost" method ="post" name="fileinfo">
      <input name="post" type="text" id="add_post" placeholder="¿What´s on your mind?"></br>
      <button type="submit" id="add_post_btn"><a href="#/home">Create Post</button></br>
      
      <div>
      <button> Galery </button>
      </div></br>
      <div id="published">
    <h2> </h2>
      </div>
      
   </form>
         </section>
     `

 }
 ,   after_render: async () => {
   document.getElementById("add_post_btn").addEventListener("click", () => {
            let post = document.getElementById("add_post");
            if (post.value == '') {
                alert(`The field cannot be empty`)
          //  } else if (Utils.validateEmail === false) {
               // window.location.hash = 'home';
               // alert('Please enter an email');
            } else {
                Credvalidator.signInUser(email.value, pass.value)
                .then(() => {
                    const postToSave = add_post.value
                    db.collection('post').add({
                        description: postUser,
                        window.location.hash = '/';
                    })
                    console.log('Save' + postToSave + 'to Firestore');
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

export default Home;
