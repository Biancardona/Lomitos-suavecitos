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
      </br>
     <div id="published">
     </div>
   </form>
         </section>
     `
    },
    after_render: async () => {
        Controller.getUser((user) => {
            if (user) {
                document.getElementById('nav-home').style.display = "none";
                document.getElementById("userName").innerHTML = 'Welcome ' + user.displayName;
                    Home.showPosts('post');
            } else {
                window.location.hash = '/login';
            }
        })
    },
  
    showPosts: (userPost) => {
        Controller.getAllPosts(userPost)
            .then((querySnapshot) => {
                const list = document.createElement('ul');
                document.getElementById("published").appendChild(list).value = "";
                querySnapshot.forEach((doc) => {
                    document.getElementById("published").appendChild(list).value = "";
                    const item = document.createElement('li');
                    const att = document.createAttribute('id');
                    att.value = doc.id;
                    item.setAttributeNode(att);
                    item.setAttribute('class', 'post');
                    list.appendChild(item);
                    item.innerHTML = doc.data().text +  "<br>" + doc.data().email + "<br>" ;
                    console.log(`${doc.id} => ${doc.data().text}`);
                })
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    },

}

export default Home;