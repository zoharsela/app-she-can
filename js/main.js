import emailApp from '../js/apps/mail/pages/email-app.cmp.js'
import emailDetails from '../js/apps/mail/pages/email-details.cmp.js'
import keepApp from '../js/apps/keep/keep-app.cmp.js'
import navBar from './cmps/nav.cmp.js'
import mainFooter from './cmps/footer.cmp.js'
import { myRouter } from './routes.js'
import userMsg from './cmps/user-msg.cmp.js'
import homePage from './pages/home-page.cmp.js'
import aboutUs from './pages/about-page.cmp.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="container">
            <main>
            <nav-bar></nav-bar>
            <router-view>
            </router-view>
            </main>
            <main-footer></main-footer>
            <user-msg/>
        </section>
    `,
    components: {
        userMsg,
        navBar,
        emailApp,
        keepApp,
        homePage,
        mainFooter,
        aboutUs,
        emailDetails
    }
}



const app = new Vue(options);