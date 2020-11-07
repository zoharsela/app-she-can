import { booksService } from '../services/books-service.js'
import bookReview from '../cmps/book-review.cmp.js'
import watchReviews from '../cmps/watch-reviews.cmp.js';
import { eventBus } from '../../../services/event-bus.js'
export default {
    name: 'book-details',
    template: `
        <section class="book-details" v-if="book">
           <router-link to="/book" class="btn">Back to shop</router-link>
            <span class="arrow-btn" @click="getNegBook(-1)">←</span>
            <span class="arrow-btn arrow-right" @click="getNegBook(1)">→</span>
            <div class="book-details-flex">
                <div class="book-txt-details">
                <h2>{{book.title}}
                    <span :class="priceColor">{{book.price}} {{currencyCodeIcon}}</span></h2> 
                    <h3 v-if="book.subtitle">{{book.subtitle}}</h3>
                    <h4>By {{authors}}</h4>
                    <p>{{bookPublishTime}} ({{book.publishDate}})</p>
                    <p>[{{catagories}}]</p>
                    <p v-if="book.pageCount">{{bookLength}} ({{book.pageCount}} pages)</p>
                    <p>Language: {{book.language}}</p>
                    <p v-if="!isToShowAll">{{textToShow}}</p>
                    <p v-if="isToShowAll">{{book.description}}</p>
                    <button class="btn" @click="toggleDesc" v-if="book.description">{{showBtnTxt}}</button>
                </div>
                <div class="book-img-price">
                 
                    <img class="book-details-img" :src="book.imgUrl" />
                </div>
                </div>
                <div class="reviews">
                <book-review @update="loadBook"></book-review>
                <watch-reviews :reviews="book.reviews" @delete="deleteReview"></watch-reviews>
            </div>
        </section>
    `,
    components: {
        bookReview,
        eventBus,
        watchReviews
    },
    data() {
        return {
            isToShowAll: false,
            book: null
        }
    },
    created() {
        this.loadBook()
    },
    methods: {
        loadBook() {
            const { bookId } = this.$route.params
            if (bookId) {
                booksService.getById(bookId)
                    .then(book => this.book = book)
            }
        },
        toggleDesc() {
            this.isToShowAll = !this.isToShowAll;
        },
        deleteReview(reviewId) {
            const idx = this.book.reviews.findIndex(review => review.id === reviewId)
            this.book.reviews.splice(idx, 1)
            booksService.saveBooks();
        },
        getNegBook(diff) {
            const negId = booksService.getNegBookId(this.book.id, diff);
            this.$router.push(`/book/${negId}`);
            this.isToShowAll = false;
        }
    },
    watch: {
        '$route.params.bookId'() {
            this.loadBook()
        }
    },
    computed: {
        bookLength() {
            const pages = this.book.pageCount;
            var bookLength = (pages < 100) ? 'Light Reading' : (pages > 200 && pages < 500) ? 'Medium Reading' : 'Long reading'
            return bookLength
        },
        authors() {
            if (!this.book.authors) return
            return this.book.authors.join(' ')
        },
        catagories() {
            if (!this.book.categories) return
            return this.book.categories.join(' ')
        },
        bookPublishTime() {
            const publishTime = (new Date()).getFullYear() - this.book.publishDate;
            if (publishTime < 1) return 'New!'
            return 'Veteran Book'
        },
        priceColor() {
            if (!this.book.price) return;
            return { 'high-price': this.book.price > 150, 'low-price': this.book.price < 20 }
        },
        currencyCodeIcon() {
            var CurrCodeIcon = this.book.currencyCode
            switch (CurrCodeIcon) {
                case 'EUR':
                    return '€';
                case 'USD':
                    return '$';
                case 'ILS':
                    return '₪';
            }
            return CurrCodeIcon
        },
        textToShow() {
            if (!this.book.description) return
            return this.book.description.slice(0, 100) + '...'
        },
        showBtnTxt() {
            return (this.isToShowAll) ? 'Show Less' : 'Show More'
        }
    }
}
