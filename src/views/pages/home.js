import Controller from '../../controller/controller.js';
let Home = {
    render: async () => {
        return /*html*/ `
     <section class="section">
     <div class="field">
     <h1 class="text-user" id="userName"></h1> 
         <p class="control has-icons-left">
         <button class="button is-primary" type="submit" id="btnClosed"><a href="#/login">Sign Out</a></button></br>
         <span class="icon is-small is-left">
         </span>
         </p>
     </div>
         <section class="section">
             <form id="form-addPost" method ="post" name="fileinfo">
      <textarea class= "form-control" name="post" type="text" id="add_post" placeholder="¿What´s on your mind?" rows="3" ></textarea></textarea></br>
      <button class= "button is_-primary"type="submit" id="create_post_btn"><a href="#/">Create Post</button></br>
      </br>
      <div id="published">
      </div>
      
   </form>
         </section>
     `
    },
    after_render: async () => {
        const user = firebase.auth().currentUser;
        //*** Obtener Post de Firestore ***
        Controller.getPosts(user.uid)
            .then((querySnapshot) => {
                const list = document.createElement('ul');
                document.getElementById("published").appendChild(list).value = "";
                querySnapshot.forEach((doc) => {
                    document.getElementById("published").appendChild(list).value = "";
                    const item = document.createElement('li');
                    const att = document.createAttribute('id');
                    const buttonTrash = document.createElement('i');
                    const editButton = document.createElement('i');
                    att.value = doc.id;
                    item.setAttributeNode(att);
                    item.setAttribute('class', 'post');
                    buttonTrash.setAttribute('class', 'fa fa-trash');
                    editButton.setAttribute('class', 'fa fa-edit');
                    list.appendChild(item);
                    item.innerHTML = doc.data().text;
                    item.appendChild(editButton);
                    item.appendChild(buttonTrash);
                    console.log(`${doc.id} => ${doc.data().text}`);
                    //*** Editar Post ***
                    // const editPost = (e) => {
                    //     e.preventDefault();
                    //     Controller.editPost(user.uid, doc.id)
                    //     .then(() => {
                    //         const textArea = document.getElementById("add_post");
                    //         textArea.querySelector('.fa fa-edit').value = doc.data().text;
                    //         const saveChangesButton = document.getElementById('create_post_btn');
                    //         saveChangesButton.innerHTML = 'Save'
                    //         console.log("Document successfully updated!");
                    //     })
                    //         .catch(function (error) {
                    //             //The document probably doesnt exist
                    //             console.error("Error updating document: ", error);
                    //         })
                    // saveChangesButton.addEventListener('click',editPost, false);
                    //     editPost(textArea);
                    // }

                    // *** Eliminar Post ***
                    const deletePosts = (e) => {
                        e.preventDefault();
                        Controller.deletePost(user.uid, doc.id)
                            .then(() => {
                                item.parentNode.removeChild(item)
                            })
                            .catch(function (error) {
                                console.error("Error removing document: ", error);
                            });
                    }
                    buttonTrash.addEventListener('click', deletePosts, false)
                })
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        document.getElementById("userName").innerHTML = 'Welcome ' + user.displayName;
        document.getElementById("create_post_btn").addEventListener("click", () => {
            let post = document.getElementById("add_post");
            if (post.value == '') {
                alert(`The field cannot be empty`)
            } else {
                //*** Añadir post a firestore ***
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