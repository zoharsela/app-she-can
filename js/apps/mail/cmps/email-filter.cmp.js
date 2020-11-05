export default {
    template: `
        <section class="email-filter">
            <input type="text" v-model="filterBy.text" placeholder="Search here" @input="emitFilter" />
            <select v-model="filterBy.status" @click="emitFilter">
                <option value="byAll">All</option>
                <option value="byRead">Read</option>
                <option value="byUnread">Unread</option>
            </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                text: '',
                status: 'byAll'
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)));
        }
    },
    created() {
        this.emitFilter();
    }
}