import homePage from './pages/home-page.cmp.js';
// import aboutPage from '../pages/about-page.js';
import emailApp from './apps/mail/pages/email-app.cmp.js';
import emailDetails from './apps/mail/pages/email-details.cmp.js';
import keepApp from './apps/keep/keep-app.cmp.js';
// import emailSideNavCmp from './apps/mail/cmps/email-side-nav.cmp.js';




const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: '/about',
    //     component: aboutPage
    // },
    {
        path: '/email/:emailsCategory/:emailId',
        component: emailDetails
    },
    {
        path: '/email/:emailsCategory',
        component: emailApp
    },
    {
        path: '/keep',
        component: keepApp,
    },
    // {
    //     path: '/email/??',///////////
    //     component: emailSideNavCmp,
    // },
]

export const myRouter = new VueRouter({ routes: myRoutes })
