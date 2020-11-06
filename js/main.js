import emailApp from '../js/apps/mail/pages/email-app.cmp.js'
import keepApp from '../js/apps/keep/keep-app.cmp.js'
import navBar from './cmps/nav.cmp.js'
import mainFooter from './cmps/footer.cmp.js'
import { myRouter } from './routes.js'
import userMsg from './cmps/user-msg.cmp.js'
import homePage from './pages/home-page.cmp.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <main>
            <nav-bar></nav-bar>
            <router-view>
            </router-view>
            </main>
            <user-msg/>
            <main-footer></main-footer>
        </section>
    `,
    components: {
        // appHeader,
        userMsg,
        navBar,
        emailApp,
        keepApp,
        homePage,
        mainFooter
    }
}



const app = new Vue(options);