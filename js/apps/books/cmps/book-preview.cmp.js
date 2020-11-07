
export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <router-link :to="'/book/' +book.id " exact>
            <img class="book-img" :src="book.imgUrl" />
           <h4>{{title}}</h4>
           <h5>Price: {{book.price}} {{currencyCodeIcon}}</h5></router-link>
        </section>
    `,
    computed: {
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
        title() {
            var title = this.book.title
            if (title.length > 20) return title.slice(0, 20) + '...'
            else return title
        }
    }
}