let Navbar = {
    render: async () => {
        let view = /*html*/ `
             <nav class="navbar" role="navigation" aria-label="main navigation">
              <a class="navbar-item" href="/#/">
               <img class="image" src="Angry.jpg">
                </a>
                  <li>
                     <a class="navbar-item" href="/#/"> Home </a>
                  </li>
                  <li>
                     <a class="navbar-item" href="/#/about"> About </a>
                  </li>
                  <li>
               <div class="buttons">
                <a class="button is-primary" href="/#/register"> 
                  <strong>Sign up</strong>
                    </a>
             <a class="button is-light" href="/#/login">
             <strong>Log in</strong>
             </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `
        return view
    },
    after_render: async () => {}

}

export default Navbar;