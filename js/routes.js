import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import emailApp from './apps/mail/pages/email-app.cmp.js';
import emailDetails from './apps/mail/pages/email-details.cmp.js';
import keepApp from './apps/keep/keep-app.cmp.js';
import bookDetails from './apps/books/pages/book-details.cmp.js';
import bookApp from './apps/books/pages/book-app.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
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
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })
