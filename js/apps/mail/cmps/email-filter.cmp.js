export default {
    template: `
        <section class="email-filter">
            <input type="text" v-model="filterObj.filterText" placeholder="Search here" @keyup.enter="emitFilter" />
            <select v-model="filterObj.filterBy" @keyup.enter="emitFilter">
                <option value="byAll">All</option>
                <option value="byRead">Read</option>
                <option value="byUnRead">UnRead</option>
            </select>
        </section>
    `,
    data() {
        return {
            filterObj: {
                filterText: '',
                filterBy: 'byAll'
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', JSON.parse(JSON.stringify(this.filterObj)));
        }
    },
    created() {
        this.emitFilter();
    }
}