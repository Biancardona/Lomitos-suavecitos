import Controller from '../../controller/controller.js';
let About = {
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
    <div class="text" id="text-about"> 
      </br> 
      <br> 
      Lomitoteca se basa en la red social "Lomitos suaves", cuya tematica son las mascotas (esecificamente perros).
      <br> 
      </br> 
      En Lomitoteca los usuarios podrán compartir cualquier post relacionado a sus mascotas o algun servicio que brinden tambien relacionado a sus perros,
      <br> 
      como por ejemplo, ofrecer servicios de paseo, veterinaria, de adopción, de cruza, etc., o también pueden subir algun post de entretenimiento o recreación (por ejemplo: hoy, 04/04/2020 se le cayó el primer colmillo a mi perrito).
      </br>
      <br>
      El usuario en su Perfil puede crear, editar y eliminar sus propios posts. Y en Home, el usuario tiene a la vista además de sus propios post, todos los de los demás usuarios que se han registrado en la red social.
      </br>
      </div>
      </div>
   </form>
         </section>
     `
    },
    after_render: async () => {
        Controller.getUser((user) => {
            if (user) {
                document.getElementById('nav-about').style.display = "none";
                document.getElementById('nav-sign-up').style.display = "none";
                document.getElementById('nav-home').style.display = "none";
            } else {
                document.getElementById('nav-about').style.display = "none";
            }
        })
    },
}
export default About;