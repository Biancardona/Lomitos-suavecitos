import Controller from '../../controller/controller.js';
let Home = {
    render: async () => {
        return /*html*/ `
     <section class="section">
     <div class="field">
     <h1 class="text-user" id="userName"></h1> 
         <p class="control has-icons-left">
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
        Controller.getUser((user) => {
            if(user) {
            document.getElementById("userName").innerHTML = 'Welcome ' + user.displayName;
            document.getElementById("create_post_btn").addEventListener("click", () => {
                Home.createPost(user.uid);
            });
            Home.showPosts(user.uid);
        }else{
            window.location.hash = '/login';
        }
        })
    },
    createPost: (userUid) => {
        event.preventDefault();
        const post = document.getElementById("add_post");
        if (post.value == '') {
            alert(`The field cannot be empty`)
        } else {
            Controller.addPost(userUid, post.value)
                .then((docRef) => {
                    console.log('Document written with ID: ', docRef.id);
                    Home.showPosts(userUid);
                })
                .catch(function (error) {
                    console.log(error.code);
                    console.log(error.message);
                    Home.showPosts(userUid);
                })
        }
    },
    showPosts: (userUid) => {
        document.getElementById("add_post").value = "";
        Controller.getPosts(userUid)
            .then((querySnapshot) => {
                document.getElementById("published").innerHTML = "";
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
                    item.innerHTML = doc.data().text + '  ' + '  ';
                    item.appendChild(editButton);
                    item.appendChild(buttonTrash);
                    console.log(`${doc.id} => ${doc.data().text}`);
                    buttonTrash.addEventListener('click', (e) => {
                        Home.deletePosts(userUid, e);
                    })
                    editButton.addEventListener('click', (e) => {
                        Home.editPost(userUid, e);

                    });
                })
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    },
    deletePosts: (userUid, e) => {
        e.preventDefault();
        const docId = event.currentTarget.parentNode.id;
        Controller.deletePost(userUid, docId)
            .then(() => {
                Home.showPosts(userUid);
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
            });
    },
    editPost: (userUid, e) => {
        e.preventDefault();
        const docId = event.currentTarget.parentNode.id;
        Controller.getPost(userUid, docId)
            .then((post) => {
                document.getElementById("create_post_btn").style.visibility = "hidden";
                const textArea = document.getElementById("add_post");
                textArea.value = post.data().text;
                const save = document.createElement('button');
                save.innerHTML = "Save changes";
                const parentId = create_post_btn.parentNode;
                parentId.insertBefore(save, create_post_btn);
                save.addEventListener('click', (e) => {
                    e.preventDefault();
                    const editedPost = document.getElementById("add_post");
                    Controller.editPost(userUid, docId, editedPost.value)
                        .then(() => {
                            save.parentNode.removeChild(save);
                            Home.showPosts(userUid);
                            document.getElementById('create_post_btn').style.visibility = "visible";
                        })
                })
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);

            })
    }

}

export default Home;