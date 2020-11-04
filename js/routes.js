// import homePage from '../pages/home-page.js';
// import aboutPage from '../pages/about-page.js';
import emailApp from './apps/mail/email-app.cmp.js';
import keepApp from './apps/keep/keep-app.cmp.js';



const myRoutes = [
    // {
    //     path: '/',
    //     component: homePage
    // },
    // {
    //     path: '/about',
    //     component: aboutPage
    // },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/keep',
        component: keepApp,
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })

