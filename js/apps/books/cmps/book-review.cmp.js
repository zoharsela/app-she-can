import { booksService } from '../services/books-service.js'
import watchReviews from '../cmps/watch-reviews.cmp.js'
import { utilService } from '../../../services/util-service.js'

export default {
    template: `
        <section class="book-review">
            <form>
                <label class="review-label">
                    <h2>Leave a review</h2>
                    <div>
                      <fieldset class="rating">
                          <input type="radio" id="star5" name="rating" value="5" v-model="rate" /><label class = "full" for="star5"></label>
                          <input type="radio" id="star4" name="rating" value="4"  v-model="rate"/><label class = "full" for="star4"></label>
                          <input type="radio" id="star3" name="rating" value="3"  v-model="rate"/><label class = "full" for="star3"></label>
                          <input type="radio" id="star2" name="rating" value="2"  v-model="rate"/><label class = "full" for="star2"></label>
                          <input type="radio" id="star1" name="rating" value="1"  v-model="rate"/><label class = "full" for="star1"></label>
                      </fieldset></div>
                         <input ref="nameInput" type="text" placeholder="Full name" v-model="name">
                        <input type="date" name="readAt" v-model="date">
                         <textarea name="moreInfo" cols="50" rows="10" v-model="reviewTxt"></textarea><br>
                         <button @click.prevent="addReview" class="btn">Add</button>
                </label>
             </form>
        </section>
    `,
    components: {
        watchReviews,
    },
    data() {
        return {
            book: '',
            name: '',
            rate: null,
            date: new Date().toLocaleDateString(),
            reviewTxt: null,
            isToShowReviews: false
        }
    },
    methods: {
        addReview() {
            const { bookId } = this.$route.params
            const review = {
                id: utilService.makeId(3),
                name: this.name,
                bookRate: this.rate,
                date: this.date,
                reviewTxt: this.reviewTxt
            }
            booksService.addReview(review, bookId)
                .then(() => {
                    this.$emit('update')
                }
                )
        }
    },
    mounted() {
        this.$refs.nameInput.focus();
    },
    created() {
        const { bookId } = this.$route.params
        if (bookId) {
            booksService.getById(bookId)
                .then(book => this.book = JSON.parse(JSON.stringify(book)))
        }
    },
    computed: {
    }
}