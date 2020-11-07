export default {
    template: `
          <nav class="main-navbar container flex">
                <router-link to="/" exact class="logo-navbar">Yes she can</router-link>
                <div class="nav-to-right">
                <button class="button-reset hamburger"><i class="fas fa-bars"></i></button>
                <router-link to="/email/inbox" exact class="navbar-link">SheMail</router-link>
                <router-link to="/keep" exact class="navbar-link">SheKeep</router-link>
                <router-link to="/book" exact class="navbar-link">SheReads</router-link>
                <router-link to="/About" exact class="navbar-link">About</router-link>
                </div>
         </nav>
    `
}