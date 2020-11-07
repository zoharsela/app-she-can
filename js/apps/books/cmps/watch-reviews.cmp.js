import { booksService } from '../services/books-service.js'
import { eventBus } from '../../../services/event-bus.js'

export default {
    props: ['reviews'],
    template: `
        <section class="watch-reviews">
            <div v-for="review in bookReviews" :key="review.id" class="review">
            <h3>{{review.name}}</h3>
                <p>Rating: {{review.bookRate}}</p>
                <p>{{review.date}}</p>
            <p class="review-info">Review: {{review.reviewTxt}}</p>
            <button class="delete-btn" @click="emitDelete(review.id)">x</button></div>
            </div>
        </section>
    `,
    data() {
        return {
            book: '',
            bookReviews: this.reviews
        }
    },
    created() {
    },
    methods: {
        emitDelete(id) {
            this.$emit('delete', id)
        }
    },
    computed: {
    }
}