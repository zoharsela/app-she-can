export default {
    props: ['email'],
    name: 'emailPreview',
    template:`
    <section class="email-preview" :class="previewClass">
           <h4>{{email.subject}}</h4>
           <router-link :to="'/email/' +email.id" exact>Details</router-link>
        </section>
    `,
    computed: {
        previewClass() {
            return { active: this.email.isActive }
        }
    },
    created() {
        console.log(this.email.subject);
    }
    
}