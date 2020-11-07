import { booksService } from '../services/books-service.js'
export default {
    template: `
        <section class="book-filter">
         <form @input.prevent="emitFilter">
         <label>
                 <input type="text" class="search-book" v-model="filterBy.byName" placeholder="Search Here"> 
          </label>
           <label>
                Min  
                 <input class="num-input" type="number" min="0" max="200" v-model.number="filterBy.fromPrice">
         </label>
           <label>
               Max
             <input class="num-input" type="number" min="0" max="200" v-model.number="filterBy.toPrice">
         </label>
       </form>
   </section>
    `,
    data() {
        return {
            filterBy: { byName: '', fromPrice: 0, toPrice: 199 },
            findVal: null,
            googleBookOptions: null
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', { ...this.filterBy });
        },
    }
}