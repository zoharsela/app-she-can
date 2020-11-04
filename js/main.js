import bookApp from'../pages/book-app.js'
import appHeader from'../cmp/app-header.js'
import { myRouter } from './routes.js'
import userMsg from '../cmp/user-msg.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <!-- <app-header></app-header> -->
            <main>
            <router-view></router-view>
            </main>
            <!-- <user-msg/> -->
        </section>
    `,
    components: {
        bookApp,
        appHeader,
        userMsg
    }
}



const app = new Vue(options);