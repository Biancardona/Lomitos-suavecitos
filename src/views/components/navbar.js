let Navbar = {
    render: async () => {
        let view = /*html*/ `
            
             <h1 class="logo">LOMITOTECA <a href="/#/"</a>
             </h1>
             <nav class="navbar" role="navigation" aria-label="main navigation">
             <ul class="main-nav" id="js-menu">
                  <li>
                     <a class="navbar-item" <a href="/#/home"> Home </a></li>
                     <li>
                  <a class="navbar-item" <a  href="/#/about"> About </a></li>
               <div class="buttons">
                <a class="navbar-item" href="/#/register"> 
                  <strong>Sign up</strong>
                    </a>
                    <div class="buttons">
             <a class="navbar-item" href="/#/login">
             <strong>Log in</strong>
             </a>
             <div class="burger">
              <i class="fas fa-bars"></i>
              </div>
                 </div>
                 </div>
                 </ul>
            </nav>
        `
        return view
    },
    after_render: async () => {}

}

export default Navbar;