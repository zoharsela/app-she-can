import { emailService } from '../services/email-service.js'
// import { eventBus, EVENT_DELETE_EMAIL } from '../../../services/event-bus.js'

export default {
    name: 'emailDetails',
    template: `
    <section class="email-details-container flex" v-if="email">
        <h2>Subject: {{email.subject}}</h2>
        <h4 class="flex">From: {{email.senderName}} <span>Sent At: {{email.sentAt}}</span></h4>
        <div class="email-body flex">
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
