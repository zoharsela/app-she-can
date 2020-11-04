export default {
    props: ['email'],
    template:`
    <section class="email-preview">
           <h4>{{email.subject}}</h4>
           <router-link :to="'/email/' +email.id" exact>Details</router-link>
        </section>
    `
    
}