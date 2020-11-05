import emailApp from'../js/apps/mail/pages/email-app.cmp.js'
import navBar from'./cmps/nav.cmp.js'
import { myRouter } from './routes.js'
import userMsg from './cmps/user-msg.cmp.js'


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
        </section>
    `,
    components: {
        // appHeader,
        userMsg,
        navBar,
        emailApp
    }
}



const app = new Vue(options);