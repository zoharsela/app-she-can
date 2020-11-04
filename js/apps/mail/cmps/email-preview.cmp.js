export default {
    props: ['email'],
    template:`
    <section class="email-preview" :class="previewClass">
           <h4>{{email.title}}</h4>
           <router-link :to="'/email/' +email.id " exact>Details</router-link>
        </section>
    `,
    computed: {
        previewClass() {
            return { active: this.book.isActive }
        }
    }
}