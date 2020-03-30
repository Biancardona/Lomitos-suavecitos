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
                  <a class="nav-links" <a  href="/#/about"> About </a></li>
               <div class="buttons">
               <li>
                <a class="nav-links" href="/#/register"> 
                  <strong>Sign up</strong></a>
                  </li>
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
    }
}

export default Navbar;