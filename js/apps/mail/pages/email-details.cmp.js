import { emailService } from '../services/email-service.js'
// import { eventBus, EVENT_DELETE_EMAIL } from '../../../services/event-bus.js'

export default {
    name: 'emailDetails',
    template: `
    <section class="email-details-container" v-if="email">
        <h4>Subject: {{email.subject}}</h4>
        <h3>From: {{email.senderName}} <span>Sent At: {{email.sentAt}}</span></h3>
        <div class="email-body">
            <p>{{email.body}}</p>
            <router-link to="/email" class="return-btn">
            <i class="fas fa-arrow-left"></i>
        </router-link>
         <button  @click="deleteEmail(email.id)"> <i class="fas fa-trash"></i></button>
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
        const emailId = this.$route.params.id
        emailService.getEmailById(emailId)
            .then(email => this.email = email)
        },
        // deleteEmail(emailId){
        //     emailService.deleteEmail(emailId)
        //     .then(() => eventBus.$emit(EVENT_DELETE_EMAIL, 'Email was successfully Deleted'))
        //     .catch(err => console.log('something went wrong', err))
        // }
    },
    created() {
        this.getEmail()
        emailService.changeToIsRead(this.$route.params.id)
    }
}
