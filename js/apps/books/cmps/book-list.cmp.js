import bookPreview from './book-preview.cmp.js';
import bookSearchAdd from './book-search-add.cmp.js';

export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <book-search-add></book-search-add>
            <ul >
                <li v-for="book in books" :key="book.id">
                    <book-preview :book="book" @click.native="emitSelectBook(book.id)"/>
                </li>
            </ul>
        </section>
    `,
    components: {
        bookPreview,
        bookSearchAdd
    },
    methods: {
        emitSelectBook(bookId) {
            this.$emit('selectBook', bookId)
        }
    },
}