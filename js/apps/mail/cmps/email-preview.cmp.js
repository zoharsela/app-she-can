export default {
    props: ['email'],
    name: 'emailPreview',
    template:`
    <section class="email-preview" @click.stop="open">
        <div :class="{read: email.isRead, unread: !email.isRead}">
           <h4>{{email.senderName}} | <span>{{email.subject}}</span></h4>
           <i v-if="!email.isRead" class="far fa-envelope"></i>
           <i v-if="email.isRead" class="far fa-envelope-open"></i>
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
            this.email.isRead = !this.email.isRead;
        }
    } ,
    computed: {
           emailText() {
               return this.email.body.length > 50 ? this.email.body.substring(0, 49) + '...' : this.email.body;
           } 
    }
}

//far fa-paper-plane
