// import { bookService } from '../js/service/book-service.js'
// import bookList from '../cmp/book-list.js';
// import bookFilter from '../cmp/book-filter.js';
// import longText from '../cmp/long-text.js';
// import BookAdd from '../cmp/book-add.js';
export default {
    template: `
     <section class="email-app">
        <!-- <book-filter v-if="!selectedBook" @filtered="setFilter"></book-filter> -->
        <!-- <book-add v-if="!selectedBook" @searchBook="setSearch" :bookName="booksSearchToShow"></book-add> -->
        <email-list v-if="!selectedEmail" :books="booksToShow" @selected="setSelectedEmail"></email-list>
        <!-- <book-google v-if="!selectedEmail"></book-google>
        <button v-if="selectedEmail" @click="sselectedEmail = null">Home page</button> -->
    </section>
  `,
    Data() {
        return {
            emails: null
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            const txt = this.filterBy.byTitle.toLowerCase();
            return this.emails.filter(email => email.title.toLowerCase().includes(txt))
        }
    }
}