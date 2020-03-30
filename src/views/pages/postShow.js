/*import Controller from '../../controller/controller.js';
let PostShow = {

    render : async () => {
        return  `
            <section class="section">
                <h1 class="text-user" id="userName"></h1> 
                <h1> Post Id : ${post.id}</h1>
                <p> Post Title : ${post.title} </p>
                <p> Post Content : ${post.content} </p>
                <p> Post Author : ${post.name} </p>
                <div id="published">
      </div>
            </section>
        `
    }
    , after_render: async () => {
        const user = firebase.auth().currentUser;
        document.getElementById("userName").innerHTML = user.displayName;
        Controller.getPost(user.uid)
        .then((querySnapshot) => {
            document.getElementById("published").value = "";
            querySnapshot.forEach((doc) => {
                Controller.addElement()
                const element = document.getElementById("published");
                element.appendChild(list);
                document.getElementById("li").innerHTML = doc.text;
            console.log(`${doc.id} => ${doc.data().text}`);
            })
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });    
    }
}

export default PostShow;
*/