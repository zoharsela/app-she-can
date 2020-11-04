// import bookApp from '../pages/book-app.js';
// import homePage from '../pages/home-page.js';
// import aboutPage from '../pages/about-page.js';
import emailApp from '../js/apps/email/email-app.js';
import keepApp from '../js/apps/keep/keep-app.cmp.js';



const myRoutes = [
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    // {
    //     path: '/car/edit/:carId?',
    //     component: carEdit
    // },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // }
]

export const myRouter = new VueRouter({ routes: myRoutes })

