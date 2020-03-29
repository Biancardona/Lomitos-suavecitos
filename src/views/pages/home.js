import Credvalidator from '../../controller/controller.js';
let Home = {
    render: async () => {
        return /*html*/ `
     <section class="section">
     <div class="field">
         <p class="control has-icons-left has-icons-right">
             <button class="buttons" type="submit" id="btnClosed"><a href="#/login">Sign Out</a></button></br>
             <span class="icon is-small is-left">
                 <i class="fas fa-envelope"></i>
             </span>
             <span class="icon is-small is-right">
                 <i class="fas fa-check"></i>
             </span>
         </p>
     </div>
         <section class="section">

             <h1 id="userName"></h1> 
             <h3 class="text-user"></h3>
             <form id="form-addPost" method ="post" name="fileinfo">
      <input name="post" type="text" id="add_post" placeholder="¿What´s on your mind?"></br>
      <button type="submit" id="create_post_btn"><a href="#/">Create Post</button></br>
      
      <div>
      <button> Galery </button>
      </div></br>
      <div id="published">
    <h2> </h2>
      </div>
      
   </form>
         </section>
     `

    },
    after_render: async () => {
        const user = firebase.auth().currentUser;
        document.getElementById("userName").innerHTML= 'Welcome ' + user.displayName;
        document.getElementById("create_post_btn").addEventListener("click", () => {
            let post = document.getElementById("add_post");
            if (post.value == '') {
                alert(`The field cannot be empty`)
                //  } else if (Utils.validateEmail === false) {
                // window.location.hash = 'home';
                // alert('Please enter an email');
            } else {
                Credvalidator.addPost(post.value)
                    .then((docRef) => {
                        console.log('Document written with ID: ', docRef.id);
                        window.location.hash = '/';
                    })
                    .catch(function (error) {
                        console.log(error.code);
                        console.log(error.message);
                        window.location.hash = '/';
                    }) 
            }
        })
    }
}

export default Home;