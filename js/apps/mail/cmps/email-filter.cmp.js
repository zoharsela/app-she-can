export default  {
    template: `
        <section class="email-filter">
            <h3>Filter those emails</h3>
            <input type="text" v-model="filterBy.byTitle" placeholder="Search here" @keyup.enter="emitFilter" />
            <hr />
            {{filterBy}}
        </section>
    `,
    data() {
        return {
            filterBy: {byTitle: ''}
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