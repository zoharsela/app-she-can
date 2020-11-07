import { booksService } from '../services/books-service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookFilter from '../cmps/book-filter.cmp.js';

export default {
    template: ` 
        <section class="container">
           <book-filter @filtered="setFilter"/>
           <book-list :books="booksToShow"/>
        </section>
    `,
    components: {
        bookList,
        bookFilter
    },
    data() {
        return {
            filterBy: null,
            books: null,
        }
    },
    created() {
        booksService.getBooks()
            .then(books => this.books = books)
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const { byName, fromPrice, toPrice } = this.filterBy
            return this.books.filter(book => {
                return book.title.toLowerCase().includes(byName.toLowerCase()) &&
                    book.price >= fromPrice &&
                    book.price < toPrice
            })
        },
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
}