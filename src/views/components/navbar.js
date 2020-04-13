
import Controller from '../../controller/controller.js';
let Navbar = {
    render: async () => {
        let view = /*html*/ `
            <nav class="navbar" role="navigation" aria-label="main navigation">
            <span class="navbar-toggle" id="js-navbar-toggle"> 
            <i class="fas fa-bars"></i>
            </span>
             <h1 class="logo" <a  href="/#/login"> LOMITOTECA </h1>
             <ul class="main-nav" id="js-menu">
             <li>
                <div class="buttons">
                  <a class="nav-links" <a  href="/#/about"> About </a></li>
               <li>
                <a class="nav-links" href="/#/register">Sign up </a></li>
                    </ul>
                 </div>
            </nav>
        `
        return view
    },
    after_render: async () => {
        const navBarToggle = document.getElementById("js-navbar-toggle");
        const mainNav = document.getElementById("js-menu");
        navBarToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");
        })
        Controller.getUser((user) => {
            if(user) {
                const signOut = document.createElement('li');
                const newsignOut = document.createElement('a');
                newsignOut.href = '#/login';
                newsignOut.innerHTML= 'Sign Out';
                signOut.appendChild(newsignOut);
                signOut.setAttribute('class', 'main-nav');
                newsignOut.setAttribute('class', 'nav-links');
                signOut.setAttribute('class', 'buttons');
                document.getElementById("js-menu").appendChild(signOut);
                newsignOut.addEventListener('click', Controller.singOut);
            } 
    })
}
}

export default Navbar;