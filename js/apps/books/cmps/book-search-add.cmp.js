import { booksService } from '../services/books-service.js'
export default {
    name: 'book-add',
    template: `
        <section class="book-add">
                <input class="add-book-input" type="text" v-model="findVal" placeholder="Find Other Books" @keyup.enter="searchBook"> 
                    <ul class="book-add-list" v-if="googleBookOptions">
                            <template v-for="option in googleBookOptions">
                                <li class="add-book" :key="option.id"> 
                                    {{option.title.slice(0,15)}}
                                    <button class="button-reset add-btn" @click="addBook(option.id)">+</button>
                                </li>
                            </template>
                        </ul>
                    </section>
    `,
    data() {
        return {
            findVal: null,
            googleBookOptions: null,
        }
    },
    methods: {
        searchBook() {
            booksService.getGoogleBook(this.findVal)
                .then(foundBooks => this.googleBookOptions = foundBooks)
        },
        addBook(bookId) {
            const book = this.googleBookOptions.find(book => book.id === bookId)
            booksService.addBookToShop(book)
            this.googleBookOptions = null;
        }
    }
}