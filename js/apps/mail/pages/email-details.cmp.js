import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../services/event-bus.js'
import emailFilter from '../cmps/email-filter.cmp.js';
import emailSideNav from '../cmps/email-side-nav.cmp.js';

export default {
    name: 'emailDetails',
    template: `
    <section>
        <div class="email-app">
    <email-filter></email-filter>
         <div class="email-app-container flex">
            <nav class="flex">
            <div class="email-app-side-container flex">
            <button class="button-reset side-nav-link plus"><i class="fas fa-plus"></i></button>
            <email-side-nav></email-side-nav>
            </div>
            </nav> 
            <div  class="email-details-container flex">   
        <div class="email-details-subject">
            <h2>Subject: {{email.subject}}</h2>
            <h4 class="flex">From: {{email.senderName}} <span>Sent At: {{email.sentAt}}</span></h4>
        </div>
        <div class="email-body flex">
            <p>{{email.body}}</p>
</div>
            <div class="email-details-btn flex">
            <button @click="returnBack" class="button-reset"><i  class="fas fa-arrow-left"></i></button>
            <button @click="deleteEmail(email.id)" class="button-reset"> <i class="fas fa-trash"></i></button>
            </div>  
            </div>
            </div>
        </div>
        </div>
    </section>
    `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        getEmail() {
            const emailId = this.$route.params.emailId
            emailService.getEmailById(emailId)
                .then(email => {
                    this.email = email
                    this.email.isRead = true
                })
        },
        deleteEmail(emailId) {
            this.$router.push('/email/inbox')
            this.email = !this.email;
            emailService.deleteEmail(emailId)
                .then(() => eventBus.$emit('show-msg', 'Email was successfully Deleted'))
        },
        returnBack() {
            this.$router.push('/email/inbox')
        }
    },
    created() {
        this.getEmail()
    },
    components: {
        emailFilter,
        emailSideNav
    }
}
