import Controller from '../../controller/controller.js';
let Home = {
    render: async () => {
        return /*html*/ `
     <section class="section">
     <div class="field">
     <h1 class="text-user" id="userName"></h1> 
         <p class="control has-icons-left has-icons-right">
         <button class="buttons" type="submit" id="btnClosed"><a href="#/login">Sign Out</a></button></br>
         <span class="icon is-small is-left">
         <i class="fas fa-sign-out-alt"></i>
         </span>
         </p>
     </div>
         <section class="section">
             <form id="form-addPost" method ="post" name="fileinfo">
      <textarea class= "form-control" name="post" type="text" id="add_post" placeholder="¿What´s on your mind?" rows="3" ></textarea></textarea></br>
      <button type="submit" id="create_post_btn"><a href="#/">Create Post</button></br>
      
      <div>
      <button> Galery </button>
      </div></br>
      <div id="published">

      </div>
      
   </form>
         </section>
     `

    },
    after_render: async () => {
        const user = firebase.auth().currentUser;
        Controller.getPost(user.uid)
        .then((querySnapshot) => {
            const list = document.createElement('ul');
            document.getElementById("published").appendChild(list).value = "";
            querySnapshot.forEach((doc) => {
                    const item = document.createElement('li');
                    const att = document.createAttribute("id");
                    att.value = doc.id;
                    item.setAttributeNode(att);
                    list.appendChild(item);
                    item.innerHTML = doc.data().text
            console.log(`${doc.id} => ${doc.data().text}`);
            })
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });    
        document.getElementById("userName").innerHTML= 'Welcome ' + user.displayName;
        document.getElementById("create_post_btn").addEventListener("click", () => {
            let post = document.getElementById("add_post");
            if (post.value == '') {
                alert(`The field cannot be empty`)
            } else {
                Controller.addPost(user.uid, post.value)
                    .then((docRef) => {
                        console.log('Document written with ID: ', docRef.id);
                        window.location.hash = 'home';
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