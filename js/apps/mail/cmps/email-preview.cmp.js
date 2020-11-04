export default {
    props: ['email'],
    name: 'emailPreview',
    template:`
    <section class="email-preview" :class="{read: email.isRead, unread: !email.isRead}" @click.stop="open">
        <div>
           <h4>{{email.senderName}} | <span>{{email.subject}}</span></h4>
           <i v-if="!email.isRead" class="fas fa-envelope"></i>
           <i v-if="email.isRead" class="fas fa-envelope-open-text"></i>
        </div>
        <div v-if="isOpen" class="open">
            <h3>{{email.subject}}</h3>
            <h3>{{email.senderName}}</h3>
            <p>{{emailText}}</p>
            <router-link :to="'/email/' +email.id">Details</router-link>
        </div>
        </section>
    `,
    data() {
       return {
            isOpen: false
       }
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen;
        }
    } ,
    computed: {
           emailText() {
               return this.email.body.length > 50 ? this.email.body.substring(0, 49) + '...' : this.email.body;
           } 
    }
}