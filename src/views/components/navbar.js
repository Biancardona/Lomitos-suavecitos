
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
                  <a id= "nav-about" class="nav-links" <a  href="/#/about"> About </a></li>
               <li>
                <a id="nav-sign-up" class="nav-links" href="/#/register">Sign up </a></li>
                <li>
                <a id="nav-home" class="nav-links" href="/#/"> Home </a></li>
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
                document.getElementById('nav-sign-up').style.display = "none";
                const signOut = document.createElement('li');
                const profile = document.createElement('li');
                const newsignOut = document.createElement('a');
                const newProfile = document.createElement('a');
                newsignOut.href = '#/login';
                newProfile.href = '#/profile';
                newProfile.innerHTML= 'Profile';
                newsignOut.innerHTML= 'Sign Out';
                signOut.appendChild(newsignOut);
                profile.appendChild(newProfile);
                signOut.setAttribute('class', 'main-nav');
                profile.setAttribute('class', 'main-nav');
                profile.setAttribute('id', 'profile-nav');
                newsignOut.setAttribute('class', 'nav-links');
                newProfile.setAttribute('class', 'nav-links');
                signOut.setAttribute('class', 'buttons');
                profile.setAttribute('class', 'buttons');
                document.getElementById("js-menu").appendChild(signOut);
                document.getElementById("js-menu").appendChild(profile);
                newsignOut.addEventListener('click', Controller.singOut);
                newProfile.addEventListener('click', () => {
                    window.location.hash = '/profile';
                })
            } else {
                document.getElementById('nav-home').style.display = "none";
            }
    })
}
}

export default Navbar;